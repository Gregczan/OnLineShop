import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/*const normalUser = {
  roles: ["user"],
  rights: ["read articles"]
};

const admin = {
  roles: ["user", "admin"],
  rights: ["read articles", "view_users"]
};*/

/*const isAllowed = (user, rights) =>
  rights.some(right => user.rights.includes(right));*/
const hasRole = (user, roles) => roles.some(role => user.roles.includes(role));
const LoginPage = ({ user }) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {hasRole(user, ["admin"]) && <p>Admin</p>}
          {hasRole(user, ["user"]) && <p>User</p>}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default LoginPage;
