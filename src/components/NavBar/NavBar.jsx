import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "../../assets/icons8-react.svg";
import { NavLinks } from "./NavBarUtils";

export default function NavBar() {
  return (
    <>
      <div className="pos-f-t">
        <div className="collapse d-lg-none" id="navbarToggleExternalContent">
          <div className="list-group list-group-flush">{NavLinks}</div>
        </div>
      </div>
      <nav
        className="navbar navbar-light bg-dark"
        style={{ zIndex: 999, position: "fixed", top: 0, left: 0, right: 0 }}
      >
        <Link className="navbar-brand d-flex" to="/">
          <img
            src={reactLogo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt=""
          />
          <h1 className="text-white ml-2">React Testing Library</h1>
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </>
  );
}
