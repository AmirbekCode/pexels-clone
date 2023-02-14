import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import Routers from '../route/Routers'
import { parsePath } from 'react-router-dom';
import { useState } from 'react';
import Categories from '../components/Categories/Categories';
function Layout() {
    return ( 
        <>
            <Navbar/> 
        <div>
            <Routers Route={parsePath}/>
        </div>
        </>
    );
}

export default Layout;