import Image from "next/image";

const API = "https://pokeapi.co/api/v2/pokemon?limit=493&offset=0";

interface Pokemon {
  name: string;
  url: string;
}
interface ListResponse {
  results: Pokemon[];
}

const SPRITES =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/";

const imageUrl = (index: number) => SPRITES + (index + 1) + ".gif";
export default async function Home() {
  "use cache";
  const response = await fetch(API);
  const data: ListResponse = await response.json();
  console.log(data);
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h2 className="etxt-2xl font-bold text-slate-900">Kanto - Sinnoh</h2>
      <p>{data.results.length} How many mfers are there again?</p>

      <div className="grid grid-cols-5 sm:grid-cols-3 lg:grid-cols-10 gap-4">
        {data.results.map((pokemon, index) => (
          <article
            key={pokemon.name}
            className="bg-white rounded-2xl shadow-md p-4 justify-center"
          >
            <Image
              src={imageUrl(index)}
              alt={pokemon.name}
              width={50}
              height={50}
              className="object-contain"
            />
            <p className="capitalize">{pokemon.name}</p>
            <p>#{index + 1}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
