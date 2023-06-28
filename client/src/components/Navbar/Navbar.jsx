import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogsByName } from "../../Redux/actions";
import { Link } from "react-router-dom";

export default function Navbar() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const handleInput = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getDogsByName(search));
    };

    return (
        <nav className="navbar">
            <div className="title">
                <Link to="/" className="link">
                    <h1>Dog's App</h1>
                </Link>
            </div>
            <div className="search">
                <input
                    type="text"
                    onChange={handleInput}
                    placeholder="Search..."
                    className="input"
                />
                <button className="submit" type="submit" onClick={handleSubmit}>
                    Search
                </button>
            </div>
            {/* <div className='btnCreate'>
                <Link to='/create' className='link'>
                    <button className='btnCreate'>Create a Dog</button>
                </Link>
            </div> */}
        </nav>
    );
}
