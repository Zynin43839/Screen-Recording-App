import Header from "@/components/Header";

const page = async({ params }: ParamsWithSearch) => {
    const { id } = await params;

    return (
    <div className="wrapper page">
        <Header subHeader="Test1234@example.com" title="Kitty | Cat" userImg="/assets/images/dummy.jpg" />
            <h1 className="text-2xl font-satoshi">USER ID: {id}</h1>
        </div>
  )
}

export default page