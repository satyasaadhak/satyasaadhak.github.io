import "./Layout.css"

import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/header/Header';
import Body from "../components/body/Body";
import Footer from '../components/footer/Footer';

export default function Layout(props) {
    const CONFIG = props.CONFIG
    return (
        <div className="App container">
            <Sidebar logo={CONFIG.logo} subtitle={CONFIG.subtitle} links={CONFIG.links} />
            <main className="App-main">
                <Header
                    src={CONFIG.header.logo}
                    alt={CONFIG.header.alt}
                    navigation={CONFIG.navigation}
                    fixedSrc={CONFIG.header.logoFixed} />
                <Body />
                <Footer copyright={CONFIG.footer.copyright} />
            </main>
        </div>
    );
}