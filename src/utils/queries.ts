import { useQuery } from "@tanstack/react-query";
import { fetchPost, fetchPosts, fetchUsers } from "./api";

export const usePosts = (pageItemsLimit: number, currentPage: number) =>
    useQuery({
        queryKey: ["posts", { pageItemsLimit, currentPage }],
        queryFn: () => fetchPosts(pageItemsLimit, currentPage),
        staleTime: Infinity,
    });

export const usePost = (id: number) =>
    useQuery({
        queryKey: ["posts", id],
        queryFn: () => fetchPost(id),
    });
// sintaxe simplificada da acima

export const useUsers = () =>
    useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });
