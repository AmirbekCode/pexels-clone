import React from 'react';
import Routers from '../route/Routers'
import { parsePath } from 'react-router-dom';
import Categories from '../components/Categories/Categories';
function HomeLayout() {
    return ( 
        <>
            <Categories/> 
        </>
    );
}

export default HomeLayout;