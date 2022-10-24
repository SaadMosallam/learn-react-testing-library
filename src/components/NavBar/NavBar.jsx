import React from 'react';
import { Link } from "react-router-dom";
import reactLogo from '../../assets/icons8-react.svg';

export default function NavBar() {
    return (
        <nav className="navbar navbar-light bg-dark">
            <Link className="navbar-brand d-flex" to="/">
                <img src={reactLogo} width="50" height="50" className="d-inline-block align-top" alt="" />
                <h1 className="text-white ml-2">React Testing Library</h1>
            </Link>
        </nav>
    )
}
