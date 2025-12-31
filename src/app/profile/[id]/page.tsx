interface UserProfileParams {
    id: string;
}

type PageProps = {
    params: Promise<UserProfileParams>;
};

export default async function UserProfile({ params }: PageProps) {
    const { id } = await params; 
    
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-black gap-4">
            <h1 className="h1 text-2xl text-center text-white">profile page</h1>
            <p className="text-white">User ID: {id}</p>
        </div>
    );
}