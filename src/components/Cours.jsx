import React from 'react'
import { useParams } from 'react-router-dom';

function Cours() {
    let { coursName } = useParams();
    return (
        <div>Cours {coursName}</div>
    )
}

export default Cours