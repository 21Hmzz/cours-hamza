import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="flex justify-center ">
                <ul className="flex flex-row gap-10 text-2xl p-3 ">
                    <li className="underline-offset-2 hover:underline text-white"><Link to="/">Accueil</Link></li>
                    <li className="underline-offset-2 hover:underline text-white"><Link to="/cours">Cours</Link></li>
                    <li className="underline-offset-2 hover:underline text-white"><Link to="/notes">Notes</Link></li>
                    <li className="underline-offset-2 hover:underline text-white"><Link to="/agenda">Emploi du temps</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar