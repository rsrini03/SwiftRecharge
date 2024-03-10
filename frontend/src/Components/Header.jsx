import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { boolean } from 'yup'
import { Link } from 'react-scroll'
import DropdownMenu from './Pages/DropDown'
import { useSelector } from 'react-redux'

const Header = () => {

    const navigation = [
        { name: 'Available Plans', href: 'verify' },
        { name: 'Features', href: 'features' },
        { name: 'Contact Us', href: 'contact' },
    ]

    const navigate = useNavigate();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const {isLoggedIn} = useSelector(state=> state.global);

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" ariaLabel="Global">
                <div className="flex lg:flex-1 items-center">
                    <a href="/" className="-m-1.5 p-1.5 flex items-center">
                        <span className="sr-only">SwiftRecharge</span>
                        <img
                            className="h-8 w-auto"
                            src="/assets/recharge-icon.png"
                            alt=""
                        />
                        <span className="ml-2 text-lg font-bold"><i>SWIFT</i><span className='text-teal-600'><i>RECHARGE</i></span></span>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" ariaHidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 cursor-pointer">
                    {navigation.map((item) => (
                        item.name === "Available Plans" ? (
                            <a key={item.name} onClick={() => navigate("/form")} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </a>
                        ) : (
                            <Link key={item.name} smooth duration={1000} to={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </Link>
                        )
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {
                        isLoggedIn == false ? (
                            <a onClick={() => navigate("/login")} href="#_" class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-teal-600 active:shadow-none shadow-lg bg-gradient-to-tr from-teal-600 to-teal-500 border-teal-700 text-white">
                                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                <span class="relative">Log In</span>
                            </a>
                        ) : (
                            <DropdownMenu />
                        )
                    }
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">SwiftRecharge</span>
                            <img
                                className="h-8 w-auto"
                                src="/assets/recharge-icon.png"
                                alt=""
                            />
                            <span className="ml-2 text-lg font-bold">SwiftRecharge</span>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" ariaHidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    onClick={() => navigate("/login")}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default Header
