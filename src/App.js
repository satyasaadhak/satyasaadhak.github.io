import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Body from './components/body/Body';
import Footer from "./components/footer/Footer";

const CONFIG = {
    "logo": {
        "src": "/icons/logo.jpeg",
        "alt": "Satyasaadhak - truth seeker..."
    },
    "header": {
        "logo": "/icons/satyasaadhak - truth seeker....png",
        "logo-mobile": "/icons/satyasaadhak - truth seeker... Mobile.png",
        "alt": "Satyasaadhak - truth seeker..."
    },
    "navigation": [
        {
            "label": "about",
            "url": "#"
        },
        {
            "label": "portfolio",
            "url": "#"
        },
        {
            "label": "contact",
            "url": "#"
        }
    ],
    "subtitle": "I think...",
    "links": [
        {
            "label": "GitHub/Satyasaadhak",
            "link": "https://github.com/satyasaadhak/",
            "icon": "/icons/github-mark.png"
        },
        {
            "label": "Twitter/Satyasaadhak_",
            "link": "https://twitter.com/satyasaadhak_",
            "icon": "/icons/twitterx-50.png"
        },
        {
            "label": "Facebook/Satyasaadhak",
            "link": "https://www.facebook.com/satyasaadhak",
            "icon": "/icons/facebook-50.png"
        },
        {
            "label": "YouTube/Satyasaadhak",
            "link": "https://www.youtube.com/@satyasadhak",
            "icon": "/icons/youtube-128.png"
        }
    ],
    "footer": {
        "copyright": "© 2023 Satyasaadhak. All rights reserved."
    }
}

function App() {
  return (
    <div className="App container">
      <Sidebar logo={CONFIG.logo} subtitle={CONFIG.subtitle} links={CONFIG.links} />
      <main className="App-main">
        <Header src={CONFIG.header.logo} alt={CONFIG.header.alt} navigation={CONFIG.navigation} />
        <Body />
        <Footer copyright={CONFIG.footer.copyright} />
      </main>
    </div>
  );
}

export default App;
