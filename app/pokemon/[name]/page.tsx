import Image from "next/image";

interface PageProps {
    params: Promise<{ id: number }>;
}
const DetailPage = async ({ params }: PageProps) => {
    "use cache";
    const { id } = await params;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if(!response.ok) {
        throw new Error(`You arent allowed to see ${id}`);
    }
    const pokemon = await response.json();
    const sprites = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/${id}.png`;
    return (
        <div>
            {sprites && (
  <Image src={sprites} alt={`${id} sprite`} width={100} height={100} />
)}
        </div>
    )
    
};

export default DetailPage;