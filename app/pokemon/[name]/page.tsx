import Image from "next/image";

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
  const sprite = pokemon.sprites.front_default;

  return sprite ? (
    <Image src={sprite} alt={`${pokemon.name} sprite`} width={100} height={100} />
  ) : (
    <p>No sprite available for {name}.</p>
  );
};

export default DetailPage;