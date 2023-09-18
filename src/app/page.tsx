"use client";

import { usePost, usePosts } from "@/utils/queries";

export default function Page() {
    const posts = usePosts();
    const postItem = usePost(10);

    return (
        <div className="container mx-auto">
            <h1 className="text-white text-3xl">Olá, mundo!</h1>

            {posts.isLoading && "Carregando..."}

            {posts.data && (
                <ul>
                    {posts.data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
