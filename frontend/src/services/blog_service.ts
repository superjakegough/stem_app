import Blog from "../models/blog";
import { API } from "aws-amplify";

const apiName: string = "blogs";
const apiPath: string = "/blogs";

export const getAllBlogs = async () => {
  return API.get(apiName, apiPath, {});
};

export const createBlog = async (blog: Blog) => {
  return API.post(apiName, apiPath, {
    body: blog
  });
};

export const updateBlog = async (blog: Blog) => {
  API.put(apiName, `${apiPath}/${blog.blogId}`, {
    body: blog
  });
};

export const deleteBlog = async (id: string) => {
  API.del(apiName, `${apiPath}/${id}`, {});
};
