import "./Header.scss"

import { useState } from "react"
import { Link } from "react-router-dom"

import { GoThreeBars } from "react-icons/go"

export default function Header() {
    var [headerIsDeployed, setHeaderIsDeployed] = useState(false)

    var headerContent = (
        <div className="fade-in">
            <Link href="">Accueil</Link>
            <Link href="">Recettes</Link>
        </div>
    )

    function deployHeader() {
        setHeaderIsDeployed(!headerIsDeployed)
    }

    return (
        <header>
            <div>
                <Link href="/">Stéphanie en cuisine</Link>
                <div onClick={deployHeader}><GoThreeBars /></div>
            </div>
            {headerIsDeployed && headerContent}
        </header>
    )
}