import Image from "../image/Image";

import "./Header.css";

export default function Header(props) {
    let headerNavigation = props.navigation.map((navItem, index) => <li key={index} className="Header-navigation-item">
        <a href={navItem.url} className="Header-navigation-link">{navItem.label}</a>
    </li> )
    
    return <div className="App-header">
        <div className="Header-logo">
            <Image src={props.src} alt={props.alt} />
        </div>
        <ul className="Header-navigation">{headerNavigation}</ul>
    </div>
}