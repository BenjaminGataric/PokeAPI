interface PageProps {
    params: Promise<{ name: string }>;
}

const DetailPage = async ({ params }: PageProps) => {
    const { name } = await params;

    return <main className="p-6">Displaying {name}</main>
};

export default DetailPage;