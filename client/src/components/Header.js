import React from 'react';
import { NavLink } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import './Header.css'

const Header = () =>{
    return(
        <div className="ui secondary pointing menu">
            <div className="header-item" >
                <NavLink to="/" exact className="item header-link">
                    Streamy
                </NavLink>
            </div>
            <div className="right menu">
                <div className="header-item">
                    <NavLink to="/" exact className="item header-link">
                        All Streams
                    </NavLink>
                </div>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header;