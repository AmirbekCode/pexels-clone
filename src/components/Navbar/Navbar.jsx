import React, { useRef, useState } from "react"
import "./navbar.css"
import Logo from '../../assets/logo.png'
import Flag from '../../assets/flag.png'
import { NavLink } from "react-router-dom"



export default function Navbar() {

    const [icon , setIcon] = useState("fa-solid fa-chevron-down")

    return(
        <div className="Navbar">
            <NavLink to="/"><img src={Logo} className="Logo"/></NavLink>
            <div className="search-section">
                <div className="search-section2">
                    <input type="text" className="searchbar" id="inputRef" placeholder="Search for free photos"/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="search-common">                    
                    <ul>
                        <li>Amirebk2</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <ul className="nav-item">
                <li className="nav-items" onMouseOver={() => setIcon("fa-solid fa-chevron-up")} onMouseOut={() =>  setIcon("fa-solid fa-chevron-down")}>Explore<i class={icon}></i>
                <div className="common-section">
                    <ul className="common-list">
                        <li>Discover Photos</li>
                        <li>Popular Searchs</li>
                        <li>Leadeboard</li>
                        <li>Chellenges</li>
                        <li>Videos</li>
                    </ul>
                </div>                
                </li>
                <li className="nav-items">Licence
                </li>
                <li className="nav-items">Upload
                </li>
                <li className="nav-items"><i class="fa-solid fa-ellipsis"></i>
                <div className="common-section cmn2">
                    <ul className="common-list">
                    <li><NavLink to="/login">Login</NavLink> </li>
                    <li><NavLink to="/login">Join</NavLink></li>
                        <li>Change Language <img src={Flag} className="flagimg"/></li>
                        <hr />
                        <li>Image & Video API</li>
                        <li>Apps & Pluggins</li>
                        <li>FAQ</li>
                        <li>Partnerships</li>
                        <hr />
                        <div className="common-social">
                            <a href="https://t.me/amirbek_dev/" className="common-social__link"><i class="fa-brands fa-telegram"></i></a>
                            <a href="https://www.instagram.com/rajaboff.me" className="common-social__link"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://github.com/AmirbekCode" className="common-social__link"><i class="fa-brands fa-github"></i></a>
                            <a href="https://www.youtube.com/@amirbekdev908" className="common-social__link"><i class="fa-brands fa-youtube"></i></a>
                        </div>
                    </ul>
                </div>   
                </li>
            </ul>
           <NavLink to="/login"> <button className="btn_solid">JOIN</button></NavLink>


        </div>
    )
}