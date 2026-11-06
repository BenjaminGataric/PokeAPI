import Link from "next/link";
import Image from "next/image";
import { getTypeColor } from "@/data/type-colors";

const API = "https://pokeapi.co/api/v2/pokemon?limit=493&offset=0";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDetails {
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
}

interface ListResponse {
  results: Pokemon[];
}

const SPRITES =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/";

const imageUrl = (index: number) => SPRITES + (index + 1) + ".png";

export default async function Home() {
  "use cache";
  const response = await fetch(API);
  if (!response) {
    throw new Error(`Failed to fetch Pokémon list`);
  }

  const data: ListResponse = await response.json();
  const pokemonWithTypes = await Promise.all(
    data.results.map(async (pokemon) => {
      const detailsResponse = await fetch(pokemon.url, { cache: "force-cache" });
      if (!detailsResponse.ok) {
        throw new Error(
          `Failed to fetch details for ${pokemon.name}: ${detailsResponse.status}`,
        );
      }

      const details: PokemonDetails = await detailsResponse.json();
      return {
        ...pokemon,
        types: details.types
          .sort((first, second) => first.slot - second.slot)
          .map(({ type }) => type.name),
      };
    }),
  );

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-slate-900">Kanto - Sinnoh</h2>
      <p>{data.results.length}</p>

      <div className="grid grid-cols-5 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {pokemonWithTypes.map((pokemon, index) => (
          <Link href={"/pokemon/" + pokemon.name} key={pokemon.name}>
            <article
              key={pokemon.name}
              className="bg-white rounded-2xl shadow-md p-4 justify-center"
            >
              <Image
                src={imageUrl(index)}
                alt={pokemon.name}
                width={100}
                height={100}
                className="object-contain"
              />
              <p className="capitalize">{pokemon.name}</p>
              <p>#{index + 1}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {pokemon.types.map((type) => (
                  <span
                    key={type}
                    className={`rounded-full px-2 py-1 text-xs capitalize ${getTypeColor(type)}`}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
