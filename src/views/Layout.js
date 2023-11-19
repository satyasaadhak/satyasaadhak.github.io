import "./Layout.css"

import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout(props) {
    return (
        <div className="App container">
            <Sidebar logo={props.CONFIG.logo} subtitle={props.CONFIG.subtitle} links={props.CONFIG.links} />
            <main className="App-main">
                <Header
                    src={props.CONFIG.header.logo}
                    alt={props.CONFIG.header.alt}
                    navigation={props.CONFIG.navigation}
                    fixedSrc={props.CONFIG.header.logoFixed} />
                <Outlet />
                <Footer copyright={props.CONFIG.footer.copyright} />
            </main>
        </div>
    );
}