"use client";

import { Post } from "@/@types/Post";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Page() {
    const query = useQuery({
        queryKey: ["posts"],
        queryFn: async (): Promise<Post[]> => {
            const result = axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            return (await result).data;
        },
    });

    return (
        <div className="container mx-auto">
            <h1 className="text-white text-3xl">Olá, mundo!</h1>

            {query.isLoading && "Carregando..."}

            {query.data && (
                <ul>
                    {query.data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
