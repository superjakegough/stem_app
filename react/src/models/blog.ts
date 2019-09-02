export interface Blog {
  blogId: string;
  title: string;
  description: string;
  content: string;
  createdAt: string;
}

export const BlankBlog = () => {
  return {
    blogId: "",
    title: "",
    description: "",
    content: "",
    createdAt: ""
  };
};
