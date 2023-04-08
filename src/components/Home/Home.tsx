import "./Home.scss"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import Presentation from "./Presentation"

export default function Home() {
    return (
        <div className="home">
            <ReactMarkdown></ReactMarkdown>
            <Presentation />
            <div className="rdv">
                <a href="https://www.vorwerk.com/fr/fr/c/vorwerk/ou-nous-trouver/thermomix-chercher-un-conseiller/thermomix/demo-form-fr-tm-aop-2-0.html/stephanie.arnaud">Prendre un rendez-vous</a>
            </div>
        </div>
    )
}