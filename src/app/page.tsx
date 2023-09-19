"use client";

import { usePosts } from "@/utils/queries";
import { useState } from "react";

export default function Page() {
    const pageItemsLimit = 3;
    const [currentPage, setCurrentPage] = useState(1);

    // usePosts = query
    const posts = usePosts(pageItemsLimit, currentPage * pageItemsLimit); // limit = pageItemsLimit, start = currentPage

    function handlePrevPageButton() {
        setCurrentPage(currentPage === 1 ? 1 : currentPage - 1);
    }

    function handleNextPageButton() {
        setCurrentPage(currentPage + 1);
    }

    return (
        <div className="container mx-auto">
            <div className="border-2 border-blue-500 p-3 my-3">
                <div className="text-2xl">
                    Itens por página: {pageItemsLimit}
                </div>
                <div className="text-2xl">Página atual: {currentPage}</div>

                <button
                    onClick={handlePrevPageButton}
                    className="m-2 border-2 border-red-500 p-2"
                >
                    Página Anterior
                </button>
                <button
                    onClick={handleNextPageButton}
                    className="m-2 border-2 border-red-500 p-2"
                >
                    Próxima Página
                </button>
            </div>

            {posts.isInitialLoading && (
                <span className="text-2xl">Carregando...</span>
            )}

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
