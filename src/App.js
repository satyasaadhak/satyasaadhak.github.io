import './App.css';
import Sidebar from "./components/sidebar/Sidebar";

const CONFIG = {
    "logo": {
        "src": "/icons/logo.jpeg",
        "alt": "Satyasaadhak - truth seeker..."
    },
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
    ]
}

function App() {
  return (
    <div className="App container">
      <Sidebar logo={CONFIG.logo} subtitle={CONFIG.subtitle} links={CONFIG.links} />
      <main className="App-main">
      </main>
    </div>
  );
}

export default App;
