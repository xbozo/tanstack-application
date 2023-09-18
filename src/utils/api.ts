import { Post } from "@/@types/Post";
import { User } from "@/@types/User";
import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export async function fetchPosts(): Promise<Post[]> {
    const result = await api.get("/posts");
    return result.data;
}

export async function fetchPost(id: number): Promise<Post> {
    const result = await api.get(`/posts/${id}`);
    return result.data;
}

export async function fetchUsers(): Promise<User[]> {
    const result = await api.get("/users");
    return result.data;
}
