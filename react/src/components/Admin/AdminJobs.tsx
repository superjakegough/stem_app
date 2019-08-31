import React from "react";
import AdminJobTable from "./AdminJobTable";
import AdminAuth from "./AdminAuth";

const AdminJob: React.FunctionComponent = props => {
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

  const content = loggedIn ? <AdminJobTable /> : <AdminAuth />;

  return (
    <div>
      {content}
    </div>
  );
};

export default AdminJob;
