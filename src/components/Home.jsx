import React from 'react'
import Navbar from './Navbar'
import logoiut from '../img/iutlogo.jpeg'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className=" bg-olive-semi-clair w-full h-full">
            <Navbar />
            <div className="bg-olive-clair flex justify-center h-32 items-center">
                <h2 className="text-4xl text-white border-4 border-olive-semi-clair rounded-full p-3 bg-olive-semi-clair  ">Plateforme centralisé cours et notes</h2>
            </div>
            <div className="p-4 bg-olive-clair flex justify-center">
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <img src={logoiut} alt="Logo" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Cours de l'IUT d'Orsay</div>
                        <p className="text-gray-700 text-base">
                            Cours obtenu durant l'année 2022/2023 à l'IUT d'Orsay en licence PRISM.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">2022</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Cours</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Informatique</span>
                    </div>
                    <div className='flex justify-center p-2'>
                        <Link to="/cours/iut-orsay">
                            <button class="bg-olive-moyen hover:bg-olive-semi-clair text-white font-bold py-2 px-4 border-b-4 border-olive-dark hover:border-olive-clair rounded">
                                Y accèder
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home