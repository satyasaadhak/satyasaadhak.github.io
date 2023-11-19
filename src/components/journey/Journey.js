import "./Journey.css";

import JourneyCard from "../journeyCard/JourneyCard";

export default function Journey(props) {
    return (
        <div className="Journey">{props.journey.map((item, index) => <JourneyCard key={index} journey={item} />)}</div>
    );
}