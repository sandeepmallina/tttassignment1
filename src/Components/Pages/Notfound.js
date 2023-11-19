import React from "react";
import { Navigate } from "react-router-dom";

function Notfound() {
  return <Navigate to="/posts" />;
}

export default Notfound;
