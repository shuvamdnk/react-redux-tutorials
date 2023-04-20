import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
export default function Header(props) {
    return (
        <>
            <nav className="navbar bg-body-tertiary shadow">
                <div className="container-fluid">
                <a href='Javascript:void(0)' className="navbar-brand">React-Redux</a>
                    <h5 style={{float:'right'}}> <FaShoppingCart/> ({props.data.length})</h5>
                </div>
            </nav>
        </>
    )
}