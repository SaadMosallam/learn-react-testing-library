import React from 'react';
import { NavLink } from "react-router-dom";

export const NavLinks = [
    <NavLink key="home" to="/" end className="list-group-item list-group-item-action rounded-0">Home</NavLink>,
    <NavLink key="login" to="login" className="list-group-item list-group-item-action rounded-0">Login</NavLink>,
    <NavLink key="profile" to="profile" className="list-group-item list-group-item-action rounded-0">Profile</NavLink>,
    <NavLink key="travel" to="travel" className="list-group-item list-group-item-action rounded-0">Travel</NavLink>,
    <NavLink key="table" to="table" className="list-group-item list-group-item-action rounded-0">Table</NavLink>,
    <NavLink key="vote" to="vote" className="list-group-item list-group-item-action rounded-0">Vote</NavLink>,
    <NavLink key="drink" to="drink" className="list-group-item list-group-item-action rounded-0">Drink Search</NavLink>,
]