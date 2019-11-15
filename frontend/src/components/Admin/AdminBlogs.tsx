import React, { useState } from "react";
import AdminBlogTable from "./AdminBlogTable";
import AdminAuth from "./AdminAuth";

export default function AdminBlog() {
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
}
