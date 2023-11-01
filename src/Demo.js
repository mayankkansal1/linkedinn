import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function Demo() {
    return (
        <div className="m-0" >
            {/* <Home></Home> */}
            <div className=''>
                <Header />
            </div>
            <div className='flex bg-gray-100'>
                <div className='basis-1/4'>
                    <Sidebar />
                </div>
                <div className='basis-2/4 w-full'>
                    <Feed />
                </div>
                <div className='basis-1/4 pl-3'>
                    <Widgets />
                </div>
            </div>
        </div>
    )
}

export default Demo