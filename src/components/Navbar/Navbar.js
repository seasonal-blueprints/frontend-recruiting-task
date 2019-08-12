import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="top__Navbar">
      <h3>StashAway</h3>
      <p className="overview">Overview</p>
      <h1>General Investing</h1>
      <div className="tabs">
        <p className="active">Overview</p>
        <p className="inactive">Assets</p>
        <p className="inactive">Projection</p>
        <p className="inactive">About portfolio</p>
      </div>
      <div className="navigate">
        <p >Home</p>
        <p>Manage deposits</p>
        <p>Refer a friend</p>
        <p>Support Oliver</p>
      </div>
      <p className="moreActionsMenu">More actions</p>
    </div>
  );
};

export default Navbar;
