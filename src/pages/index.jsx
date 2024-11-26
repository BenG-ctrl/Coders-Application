import React from "react";
import Login from "./LoginRegisterPages/Login";
import Register from "./LoginRegisterPages/Register";

export default function Dashboard() {
  user = undefined;
  return <div>{user ? <Login /> : <Register />}</div>;
}
