import axios from "axios";

const endpoint = axios.create({baseURL : "https://jsonplaceholder.typicode.com"});

export const getPosts = async() => {
    const response = await endpoint.get("/users");
    return response.data;
}

export const dataPost = async (newPost) => {
    const res = await endpoint.post("/users", newPost);
    return res.data;
}

export const dataDelete = async (id) => {
    const res = await endpoint.delete(`/users/${id}`);
    return res.data;
}

export const dataPut = async (id, updatedPost) => {
    const res = await endpoint.put(`/users/${id}`, updatedPost);
    return res.data;
}