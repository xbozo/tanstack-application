import { useQuery } from "@tanstack/react-query";
import { fetchPost, fetchPosts, fetchUsers } from "./api";

export const usePosts = () => {
    const query = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    });
    return query;
};

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
