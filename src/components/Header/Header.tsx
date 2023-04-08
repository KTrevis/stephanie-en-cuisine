import "./Header.scss"

import { useState } from "react"
import { Link } from "react-router-dom"

import { GoThreeBars } from "react-icons/go"

export default function Header() {
    var [headerIsDeployed, setHeaderIsDeployed] = useState(false)

    var headerContent = (
        <div className="fade-in">
            <Link to="">Accueil</Link>
            <Link to="">Recettes</Link>
        </div>
    )

    function deployHeader() {
        setHeaderIsDeployed(!headerIsDeployed)
    }

    return (
        <header>
            <div>
                <Link to="/">Stéphanie en cuisine</Link>
                <div onClick={deployHeader}><GoThreeBars /></div>
            </div>
            {headerIsDeployed && headerContent}
        </header>
    )
}