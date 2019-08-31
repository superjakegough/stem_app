import React from "react";
import AdminBlogTable from "./AdminBlogTable";
import AdminAuth from "./AdminAuth";

const AdminBlog: React.FunctionComponent = props => {
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

  const content = loggedIn ? <AdminBlogTable /> : <AdminAuth />;

  return (
    <div>
      {content}
    </div>
  );
};

export default AdminBlog;
