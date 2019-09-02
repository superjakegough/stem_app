import React, { FunctionComponent, useState } from "react";
import AdminJobTable from "./AdminJobTable";
import AdminAuth from "./AdminAuth";

const AdminJob: FunctionComponent = props => {
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
};

export default AdminJob;
