import React from "react";
import { NavLink } from "react-router-dom";

const Navebar = () => {
  return (
    <div className="flex flex-row gap-4 place-content-evenly">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Pastes">Pastes</NavLink>
    </div>
  );
};

export default Navebar;
