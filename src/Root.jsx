import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;