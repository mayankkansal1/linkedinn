import React from 'react'

function HeaderOption({ Icon, title }) {
    return (
        <div className=' flex-row items-center mr-3 cursor-pointer hover:bg-black'>
            {Icon && <Icon />}
            <h3>{title}</h3>
        </div>
    )
}

export default HeaderOption