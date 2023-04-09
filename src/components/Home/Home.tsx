import "./Home.scss"

import { AiFillInstagram, AiFillFacebook } from "react-icons/ai"
import { FaTiktok } from "react-icons/fa"

import logo from "./logo.jpg"

import Presentation from "./Presentation"
import RSBar from "./RSBar"

export default function Home() {
    let instagram = "https://www.instagram.com/stephanieencuisine/"
    let facebook = ""
    let tiktok = ""

    return (
        <div className="home">
            <img src={logo} style={{ borderRadius: "50%", margin: "0 auto", display: "block" }} />
            <p><b>Stéphanie en cuisine</b><br />Conseillère Thermomix</p>
            <div className="rs-logo-container">
                <a href={instagram}><AiFillInstagram /></a>
                <a href={facebook}><AiFillFacebook /></a>
                <a href={tiktok}><FaTiktok /></a>
            </div>
            <Presentation />
            <div className="rdv">
                <a href="https://www.vorwerk.com/fr/fr/c/vorwerk/ou-nous-trouver/thermomix-chercher-un-conseiller/thermomix/demo-form-fr-tm-aop-2-0.html/stephanie.arnaud">Prendre un rendez-vous</a>
            </div>
            <div className="rs-bar-container">
                <RSBar text={"Instagram"} logo={<AiFillInstagram />} link={instagram} />
                <RSBar text={"Facebook"} logo={<AiFillFacebook />} link={facebook} />
                <RSBar text={"TikTok"} logo={<FaTiktok />} link={tiktok} />
            </div>
        </div>
    )
}