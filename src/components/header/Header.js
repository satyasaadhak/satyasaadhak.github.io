import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Image from "../image/Image";

import "./Header.css";

export default function Header(props) {

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let AppHeader = document.querySelector('.App-header');
            if (window.scrollY > AppHeader.offsetTop + AppHeader.offsetHeight/10) {
                AppHeader.classList.add('fixed');
            } else {
                AppHeader.classList.remove('fixed');
            }
        })
    });
    
    const currentLocation = useLocation();

    let headerNavigation = props.navigation.map((navItem, index) => {
        const navigationClass = currentLocation.pathname === navItem.url ? 'Header-navigation-link active' : 'Header-navigation-link';
        return <li key={index} className="Header-navigation-item">
            <Link to={navItem.url} className={navigationClass}>{navItem.label}</Link>
        </li>
    });
    
    return <header className="App-header">
        <div className="Header-logo">
            <Image className="logo" src={props.src} alt={props.alt} />
            <svg className="logo-fixed" xmlns="http://www.w3.org/2000/svg" width="724" height="80" viewBox="0 0 724 80">
                <title>{props.alt}</title>
                <text id="satyasaadhak_truth_seeker..." data-name="satyasaadhak truth seeker..." transform="translate(1)" fill="#1d2436" fontSize="56" fontFamily="SamarkanNormal, Samarkan"><tspan x="0" y="58">satyasaadhak </tspan><tspan y="58" fontSize="32">truth seeker...</tspan></text>
            </svg>
        </div>
        <ul className="Header-navigation">{headerNavigation}</ul>
    </header>
}