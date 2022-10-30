import React from 'react';
import { Link } from "react-router-dom";

export const NavLinks = [
    <Link key="home" to="/" className="list-group-item list-group-item-action bg-secondary text-white rounded-0">Home</Link>,
    <Link key="login" to="login" className="list-group-item list-group-item-action bg-info text-white rounded-0">Login</Link>,
    <Link key="profile" to="profile" className="list-group-item list-group-item-action bg-secondary text-white rounded-0">Profile</Link>,
    <Link key="travel" to="travel" className="list-group-item list-group-item-action bg-info text-white rounded-0">Travel</Link>,
    <Link key="table" to="table" className="list-group-item list-group-item-action bg-secondary text-white rounded-0">Table</Link>,
    <Link key="vote" to="vote" className="list-group-item list-group-item-action bg-info text-white rounded-0">Vote</Link>,
]