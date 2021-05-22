import React from 'react';
import {Link}from 'react-router-dom'

const Menu = () => {
    return (
        <>
        <div className="my-3">
            <Link to='/create'>
            <button className='btn btn-danger m-1'>Create Survey</button>
            </Link>
            <Link to='/publish'>
            <button className='btn btn-danger m-1'>Publish Survey</button>
            </Link>
            
        </div>
            
        </>
    );
};

export default Menu;