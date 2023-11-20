import "./Contact.css";
import Image from "../../components/image/Image";

export default function Contact(props) {
    return <>
        <section className="Contact-opening">
            <h2>contact</h2>
            <p>Here's a convenient form to send me an email, if you so wish!</p>
        </section>
        <section className="Contacts">
            <form className="Contact-form" action="">
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" id="email" placeholder="Email" />
                <textarea name="message" id="message" placeholder="Message"></textarea>
                <input type="submit" value="Submit" />
            </form>
            <div className="Contact-links">
                {props.CONFIG.links.map(link => <article key={link.label.split('/')[0]} className="Contact-link">
                    <a href={link.link} target="_blank" rel="noreferrer"><Image src={link.icon} alt={link.label} /></a>
                </article>)}
            </div>
        </section>
    </>
}