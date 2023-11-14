import Image from "../image/Image";
import "./Sidebar.css"

export default function Sidebar(props) {
    const logoProperties = {
      className: "Sidebar-logo"
    };
    
    let links = props.links.map((link, index) => <li key={index} className="Sidebar-link">
        <div className="Sidebar-link-icon"><Image src={link.icon} alt={link.label} /></div>
        <p className="Sidebar-link-label"><a className="Sidebar-link-url" href={link.link}>{link.label}</a></p>
    </li>)
    
    return <aside className="App-sidebar">
        <div className="Sidebar-logo">
            <Image src={props.logo.src} alt={props.logo.alt} properties={logoProperties}/>
        </div>
        <p className="Sidebar-subtitle">
            {props.subtitle}
        </p>
        <ul className="Sidebar-links">{links}</ul>
    </aside>
}