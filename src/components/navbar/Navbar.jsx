import React, {useState} from 'react';
import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import NepflixLogo from "./nepflix.png";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src = {NepflixLogo} alt="NepflixLogo"/>
                    <Link to="/" className="link">
                    <span>Homepage</span>
                    </Link>
                    <Link to="/series" className="link">
                    <span>Series</span>
                    </Link>
                    <Link to="/movies" className="link">
                    <span>Movies</span>
                    </Link>
                    
                    <span>New and Popular</span>
                    
                    
                    <span>My List</span>
                    
                    
                    
                    
                    
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_960_720.jpg" alt=""/>
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>

                    
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
