import "./JourneyCard.css"

import Image from "../image/Image";

export default function JourneyCard(props) {
    const journey = props.journey;
    return (
        <article className="Journey-card">
            <div className="Journey-logo">
                <Image src={journey.logo} alt={journey.name} />
            </div>
            <div className="Journey-details">
                <header className="Journey-name">
                    <h2 style={{color: journey.color}}>{journey.name}</h2>
                </header>
                {journey.positions.map((item, index) => <div key={index} className="Journey-position">
                    <p>{item.title}</p>
                    <p>{item.duration}</p>
                </div>)}
            </div>
        </article>
    );
}