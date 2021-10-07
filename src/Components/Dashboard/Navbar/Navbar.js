import React from 'react';
import { Link } from 'react-router-dom';
import Image from "../../Images/logo.png";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav_bar">
            <div className="container_fluid">
                <div className="main_menu_section">
                    <div className="logo_image">
                        <img src={Image} alt="" />
                    </div>
                    <div className="nav_menu_bar_icon">
                        <i className="fa fa-bars"></i>
                    </div>
                    <div className="nav_bar_seach_bar">
                        <input type="search" placeholder="Search Here...." />
                        <i className="fa fa-search"></i>
                    </div>
                    <div className="nav_bar_notification_icon">
                        <i className="fa fa-bell"></i>
                        <span>4</span>
                    </div>
                    <div className="nav_bar_admin_profile">
                        <img src="https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="nav_menu_item">
                <nav>
                    <ul>
                        <li><i className="fas fa-home"></i><Link to="/">Dashboard</Link></li>
                        <li><i className="fas fa-headphones"></i><Link to="/addProduct">AddProduct</Link></li>
                        <li><i className="fas fa-comment-dots"></i><Link to="/massage">Massage</Link></li>
                        <li><i className="fas fa-sign-out-alt"></i><Link to="/signout">Sign Out</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;