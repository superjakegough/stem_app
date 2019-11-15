import React, { useState } from "react";
import AdminJobTable from "./AdminJobTable";
import AdminAuth from "./AdminAuth";

export default function AdminJob() {
  const [signedIn, setSignedIn] = useState<boolean>(false);

  function handleSignedIn() {
    setSignedIn(true);
  }

  const content = signedIn ? (
    <AdminJobTable />
  ) : (
    <AdminAuth handleSignedIn={handleSignedIn} />
  );

  return <div>{content}</div>;
}
