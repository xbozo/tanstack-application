import { Post } from "@/@types/Post";
import { User } from "@/@types/User";
import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export async function getPosts(): Promise<Post[]> {
    const result = await api.get("/posts");
    return result.data;
}

export async function getPost(id: number): Promise<Post> {
    const result = await api.get(`/posts/${id}`);
    return result.data;
}

export async function getUsers(): Promise<User[]> {
    const result = await api.get("/users");
    return result.data;
}
