import React, { Fragment } from 'react'
import { AccountCircle, Group, Home, Notifications, Search, Sms, Work } from '@mui/icons-material'
import linkedIn from "./download.png"
import HeaderOption from './HeaderOption'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'


const userNavigation = [
    { name: 'Your Profile', link: '/profile' },
    { name: 'Settings', link: '/' },
    { name: 'Sign out', link: '/logout' },
];

function Header() {
    return (
        <Disclosure as="nav" className="bg-gray-300 ">

            <>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">

                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="h-8 w-auto"
                                    src={linkedIn}
                                    alt="LinkedIn Logo"
                                />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex p-2.5 border-none ml-2 font-semibold outline-0 items-center rounded-lg h-2.5 mt-1">
                                    <Search />
                                    <input className='outline-none border-solid text-black' type='text' placeholder='Search' />
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-3">
                                <div className='flex'>
                                    <button className="relative flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-1.5" />
                                        <HeaderOption Icon={Home} title="Home" />
                                    </button >
                                    <button className="relative flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-1.5" />
                                        <HeaderOption Icon={Group} title="My Network" />
                                    </button >
                                    <button className="relative flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-1.5" />
                                        <HeaderOption Icon={Work} title="Jobs" />
                                    </button >
                                    <button className="relative flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-1.5" />
                                        <HeaderOption Icon={Sms} title="Messaging" />
                                    </button >
                                    <button className="relative flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-1.5" />
                                        <HeaderOption Icon={Notifications} title="Notifications" />
                                    </button >
                                    <Menu.Button className="relative flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-1.5" />
                                        <HeaderOption Icon={AccountCircle} title="Me" />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        {userNavigation.map((item) => (
                                            <Menu.Item key={item.name}>
                                                {({ active }) => (
                                                    <Link
                                                        to={item.link}
                                                        className={(
                                                            active ? 'bg-gray-100' : '',
                                                            'block px-4 py-2 text-sm text-gray-700'
                                                        )}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        ))}
                                        {/* <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                // onSubmit={ }
                                                // className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Your Profile
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                // onSubmit={ }
                                                // className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Settings
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link to='/login'>
                                                    <button>
                                                        Sign out
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item> */}
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {userNavigation.map((item) => (
                            <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                // className={classNames(
                                //     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                //     'block rounded-md px-3 py-2 text-base font-medium'
                                // )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Disclosure.Button>
                        ))}
                    </div>
                </Disclosure.Panel>
            </>

        </Disclosure>





        // <div className='flex items-center sticky top-0 pt-3 pl-3 text-gray-400 border-b-2 pb-2 w-full'>
        //     <div className=' flex w-2/4 justify-center'>
        //         <img className='mr-2' src={linkedIn} width={30} height={30} alt='LinkedIn' />
        //         <div className='p-2.5 border-none ml-2 font-semibold outline-0 flex items-center rounded-lg h-2.5 mt-1'>
        //             <Search />
        //             <input className='outline-none border-solid text-black' type='text' placeholder='Search' />
        //         </div>
        //     </div>

        //     <div className='flex items-center text-xs font-normal text-center w-2/4 gap-2 justify-center'>
        //         <HeaderOption Icon={Home} title="Home" />
        //         <HeaderOption Icon={Group} title="My Network" />
        //         <HeaderOption Icon={Work} title="Jobs" />
        //         <HeaderOption Icon={Sms} title="Messaging" />
        //         <HeaderOption Icon={Notifications} title="Notifications" />
        //         <HeaderOption Icon={AccountCircle} title="Me" />

        //     </div>

        // </div>
    )
}

export default Header