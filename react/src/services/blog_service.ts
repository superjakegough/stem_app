import Blog from "../models/blog";
import API from "@aws-amplify/api";

const apiName: string = "blogs";
const apiPath: string = "/blogs";

export const GetAllBlogs = async (): Promise<Blog[]> => {
  return API.get(apiName, apiPath, {});
};

export const GetBlog = async (id: string): Promise<Blog> => {
  return API.get(apiName, `${apiPath}/${id}`, {});
};

export const CreateBlog = async (blog: Blog): Promise<any> => {
  return API.post(apiName, apiPath, {
    body: blog
  });
};

export const UpdateBlog = async (blog: Blog): Promise<any> => {
  return API.put(apiName, `${apiPath}/${blog.blogId}`, {
    body: blog
  });
};

export const DeleteBlog = async (id: string): Promise<any> => {
  return API.del(apiName, `${apiPath}/${id}`, {});
};
