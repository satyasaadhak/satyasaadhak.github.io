import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './layouts/Layout';
import About from './views/about/About';
import Portfolio from './views/portfolio/Portfolio';
import Contact from './views/contact/Contact';

const CONFIG = {
    "logo": {
        "src": "/icons/logo.jpeg",
        "alt": "Satyasaadhak - truth seeker..."
    },
    "header": {
        "logo": "/icons/satyasaadhak - truth seeker....png",
        "logoFixed": "/icons/satyasaadhak - truth seeker... fixed.png",
        "logoMobile": "/icons/satyasaadhak - truth seeker... Mobile.png",
        "alt": "Satyasaadhak - truth seeker..."
    },
    "navigation": [
        {
            "label": "about",
            "url": "/"
        },
        {
            "label": "portfolio",
            "url": "/portfolio"
        },
        {
            "label": "contact",
            "url": "/contact"
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
            "link": "https://www.youtube.com/@satyasaadhak",
            "icon": "/icons/youtube-128.png"
        }
    ],
    "footer": {
        "copyright": "© 2023 Satyasaadhak. All rights reserved."
    }
}

function App() {
  return (
    <Router basename=''>
        <Routes>
            <Route path='' element={<Layout CONFIG={CONFIG} />}>
                <Route index element={<About />}></Route>
                <Route path='/portfolio' element={<Portfolio />}></Route>
                <Route path='/contact' element={<Contact CONFIG={CONFIG} />}></Route>
            </Route>
        </Routes>
    </Router>
  );
}

export default App;
