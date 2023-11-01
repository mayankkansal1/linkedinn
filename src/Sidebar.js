import { Tag } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'

function Sidebar() {
    return (
        <div className='px-2 border p-2 pt-5 gap-y-2'>
            <div className='border rounded-md'>
                <div>
                    <img src='' alt='' />
                    <Avatar />
                    <h2>Mayank Kansal</h2>
                    <h4>Fresher</h4>
                </div>

                <div className='cursor-pointer hover:bg-slate-200'>
                    <div className='flex  gap-x-20'>
                        <p>Connections</p>
                        <p>9</p>
                    </div>
                    <div className='flex gap-x-8'>
                        <p>Grow Your Network</p>
                        <p>0</p>
                    </div>
                </div>
                <div className='cursor-pointer hover:bg-slate-200'>
                    <p>Access Exclusive tools & insights</p>
                    <a>Try Premium for free</a>
                </div>
                <div className='cursor-pointer hover:bg-slate-200'>
                    <p>My Items</p>
                </div>
            </div>

            <div className='border rounded-md pt-2'>
                <p className='font-bold'>Recent</p>
                <p><Tag />JavaScript</p>
                <p><Tag />React</p>
            </div>
        </div>
    )
}

export default Sidebar