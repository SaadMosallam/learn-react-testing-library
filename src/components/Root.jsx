import React from 'react';
import { Outlet, Link } from "react-router-dom";
import NavBar from './NavBar';

const Root = () => {
    return (
        <>
            <NavBar />
            <div className='d-flex flex-column align-items-center align mt-5'>
                <h1 className=''>Learn React Testing Library!</h1>
                <p>Learn how to test React components using React Testing Library.</p>
                <div className="list-group container">
                    <div className='row d-flex justify-content-center'>
                        <div className='col-6'>
                            <Link to="login" className="list-group-item list-group-item-action bg-info text-white">Login</Link>
                            <Link to="profile" className="list-group-item list-group-item-action bg-secondary text-white">Profile</Link>
                        </div>
                    </div>


                    {/* <Link href="#" className="list-group-item list-group-item-action list-group-item-primary">This is a primary list group item</a>
            <Link href="#" className="list-group-item list-group-item-action list-group-item-secondary">This is a secondary list group item</a>
            <Link href="#" className="list-group-item list-group-item-action list-group-item-success">This is a success list group item</a>
            <Link href="#" className="list-group-item list-group-item-action list-group-item-danger">This is a danger list group item</a>
            <Link href="#" className="list-group-item list-group-item-action list-group-item-warning">This is a warning list group item</a>
            <Link href="#" className="list-group-item list-group-item-action list-group-item-info">This is a info list group item</a>
            <Link href="#" className="list-group-item list-group-item-action list-group-item-light">This is a light list group item</a>
            <Link href="#" className="list-group-item list-group-item-action list-group-item-dark">This is a dark list group item</a> */}
                </div>
            </div>
        </>

    );
}

export default Root;
