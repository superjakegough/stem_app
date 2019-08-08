import axios from "axios";
import Blog from "../models/blog";

const backendUrl: string = "http://localhost:3001";
const apiRoute: string = "blogs";

export const getAllBlogs = async () => {
  const res = await axios.get(`${backendUrl}/${apiRoute}/getAll`);
  return res.data.blog;
};

export const createBlog = async (blog: Blog) => {
  const res = await axios.post(`${backendUrl}/${apiRoute}/create`, {
    title: blog.title,
    description: blog.description,
    content: blog.content
  });
  return res.data;
};

export const updateBlog = async (blog: Blog) => {
  const res = await axios.put(`${backendUrl}/${apiRoute}/update/${blog.blogId}`, {
    title: blog.title,
    description: blog.description,
    content: blog.content
  });
  return res.data;
};

export const deleteBlog = async (id: string) => {
  const res = await axios.delete(`${backendUrl}/${apiRoute}/delete/${id}`);
  return res.data;
};
