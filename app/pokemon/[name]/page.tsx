import PokemonSprite from "@/components/PokemonSprite";
import { getTypeColor } from "@/data/type-colors";

interface PageProps {
  params: Promise<{ name: string }>;
}

const DetailPage = async ({ params }: PageProps) => {
  const { name } = await params;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!response.ok) {
    throw new Error(`Failed to load ${name}: ${response.status}`);
  }

  const pokemon = await response.json();
  const officialArtwork =
    pokemon.sprites.other?.["official-artwork"]?.front_default ?? null;
  const gen1 =
    pokemon.sprites.versions?.["generation-i"]?.["red-blue"]?.front_default ??
    pokemon.sprites.versions?.["generation-i"]?.yellow?.front_default ??
    pokemon.sprites.front_default;
  const gen2 =
    pokemon.sprites.versions?.["generation-ii"]?.gold?.front_default ?? null;

  const gen2Shiny =
    pokemon.sprites.versions?.["generation-ii"]?.gold?.front_shiny ?? null;
  const gen3 =
    pokemon.sprites.versions?.["generation-iii"]?.["firered-leafgreen"]
      ?.front_default ?? null;
  const gen4 =
    pokemon.sprites.versions?.["generation-iv"]?.["heartgold-soulsilver"]
      ?.front_default ?? null;
  const gen5 =
    pokemon.sprites.versions?.["generation-v"]?.["black-white"]
      ?.front_default ?? null;

  return (
    <main className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
        <h1 className="py-6 text-5xl font-bold capitalize">{pokemon.name}</h1>
        <span className={`capitalize ${getTypeColor(pokemon.name)}`}>
          {pokemon.type}
        </span>
        <PokemonSprite
          name={pokemon.name}
          officialArtwork={officialArtwork}
          gen1={gen1}
          gen2={gen2}
          gen2Shiny={gen2Shiny}
          gen3={gen3}
          gen4={gen4}
          gen5={gen5}
        />
      </div>
    </main>
  );
};

export default DetailPage;
