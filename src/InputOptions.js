import React from 'react'

function InputOptions({ Icon, title }) {
    return (
        <div className='flex gap-2'>
            <Icon />
            <h4>{title}</h4>
        </div>
    )
}

export default InputOptions