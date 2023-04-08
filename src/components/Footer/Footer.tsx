import "./Footer.scss"

import { AiFillInstagram } from "react-icons/ai"

export default function Footer() {
    return (
        <footer>
            <p>Site réalisé par Kevin Trevis</p>
            <a href="https://www.instagram.com/stephanieencuisine/">{<AiFillInstagram />}</a>
        </footer>
    )
}