import React, { useContext } from "react";
import Loader from "../components/Loader";
import { Context } from "../main";

const profile = () => {
  const { isAuthenticated, user, loading } = useContext(Context);
  return loading ? (
    <Loader />
  ) : (
    <div className="profile">
      <h1>{user?.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default profile;
