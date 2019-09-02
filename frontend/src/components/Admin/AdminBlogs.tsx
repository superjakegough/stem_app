import React, { FunctionComponent, useState } from "react";
import AdminBlogTable from "./AdminBlogTable";
import AdminAuth from "./AdminAuth";

const AdminBlog: FunctionComponent = props => {
  const [signedIn, setSignedIn] = useState<boolean>(false);

  function handleSignedIn() {
    setSignedIn(true);
  }

  const content = signedIn ? (
    <AdminBlogTable />
  ) : (
    <AdminAuth handleSignedIn={handleSignedIn} />
  );

  return <div>{content}</div>;
};

export default AdminBlog;
