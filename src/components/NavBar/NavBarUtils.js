import React from 'react';
import { Link } from "react-router-dom";

export const NavLinks = [
    <Link to="/" className="list-group-item list-group-item-action bg-secondary text-white rounded-0">Home</Link>,
    <Link to="login" className="list-group-item list-group-item-action bg-info text-white rounded-0">Login</Link>,
    <Link to="profile" className="list-group-item list-group-item-action bg-secondary text-white rounded-0">Profile</Link>
]