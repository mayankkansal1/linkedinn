import { FiberManualRecord, Info } from '@mui/icons-material'
import { Icon } from '@mui/material'
import React from 'react'

function Widgets() {

    return (
        <div className='pt-5' >
            <div className='flex border rounded-lg px-4 justify-between top-5 '>
                <h2>LinkedIn News</h2>
                <Info />
            </div>
            <table>
                <li>Israel,Hamas War</li>
                <li>CoronaVirus</li>
                <li>India Canada Relations Detroiting</li>
                <li>JavaScript</li>
                <li>React</li>
            </table>
        </div>
    )
}


export default Widgets