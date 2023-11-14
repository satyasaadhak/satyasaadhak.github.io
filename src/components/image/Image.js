import "./Image.css";

export default function Image(params) {
    return <img src={params.src} alt={params.alt} {...params.properties} {...params.abc}/>
}