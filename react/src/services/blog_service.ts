import Blog from "../models/blog";
import API from "@aws-amplify/api";

const apiName: string = "blogs";
const apiPath: string = "/blogs";

export const GetAllBlogs = async () => {
  return API.get(apiName, apiPath, {});
};

export const GetBlog = async (id: string) => {
  return API.get(apiName, `${apiPath}/${id}`, {});
};

export const CreateBlog = async (blog: Blog) => {
  return API.post(apiName, apiPath, {
    body: blog
  });
};

export const UpdateBlog = async (blog: Blog) => {
  return API.put(apiName, `${apiPath}/${blog.blogId}`, {
    body: blog
  });
};

export const DeleteBlog = async (id: string) => {
  return API.del(apiName, `${apiPath}/${id}`, {});
};
