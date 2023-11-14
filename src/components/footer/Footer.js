import "./Footer.css"

export default function Footer(props) {
    return <footer className="App-footer">
        <p className="Footer-copyright">{props.copyright}</p>
    </footer>
}