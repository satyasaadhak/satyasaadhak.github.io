import './About.css';
import Journey from "../../components/journey/Journey";

export default function About() {
    
    const journey = [
        {
            name: "Delhi Technological University",
            logo: "/icons/DTU - Official logo.png",
            color: "#6C2822",
            positions: [
                {
                    title: "Bachelor Of Technology, Information Technology",
                    duration: "2012 - 20216"
                }
            ]
        },
        {
            name: "Makkpress Technology Private Limited",
            logo: "/icons/Makkpress logo.png",
            color: "#37446A",
            positions: [
                {
                    title: "PHP Intern",
                    duration: "April, 2018 - July, 2018"
                },
                {
                    title: "Web Developer",
                    duration: "2018 - 2020"
                }
            ]
        },
        {
            name: "Chetu India Private Limited",
            logo: "/icons/Chetu Icon.png",
            color: "#0096A3",
            positions: [
                {
                    title: "BigCommerce Developer",
                    duration: "2020 - 2021"
                }
            ]
        },
        {
            name: "GE Appliances, a Haier Company",
            logo: "/icons/GEA logo.png",
            color: "#000000",
            positions: [
                {
                    title: "Associate Developer, eCommerce",
                    duration: "2021 - present"
                }
            ]
        }
    ];
    
    return(
        <main className="App-body about">
            <section className="About-opening">
                <header><h1>about</h1></header>
                
                <p>Greetings, fellow seekers!</p>
                <p>Since you're here, I assume you're seeking something. It so happens, so am I!</p>
                <p>What am I seeking though? Anything and everything.</p>
                <p>Huh?! What does that even mean? Is this is a developer's profile? Yes, it is. Web developer to be precise (for now). Probably that's what you came here looking for. Ah! That makes sense now, to me at the very least.</p>
                <p>With that out of the way, a formal introduction. I am Deepak Maurya (hereafter known as, Satyasaadhak - truth seeker...). I am a web application developer, possibly the one you're looking for. I've been in the business for about 6 years now, experienced many technologies and domains during this time. We'll talk about them later, it's a promise.</p>
                <p>How's the journey been like you ask? Here's a glimpse..</p>
            </section>
            <section className="About-journey">
                <Journey journey={journey} />
            </section>
            <section className="About-conclusion">
                <p>And now you know!</p>
                <p>There will be more coming, I've made promises. Keep a watch. Bye for now!!</p>
            </section>
        </main>
    );
}