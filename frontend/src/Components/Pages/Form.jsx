import React from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="relative isolate px-6 pt-14 lg:px-8" style={{
                backgroundImage: "url(/assets/bbblurry.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: "100vh"
            }}>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <img className="mx-auto h-10 w-auto" src="/assets/recharge-icon.png" alt="Your Company" />

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Let's get Your
                        </h2>
                        <br />
                        <h2 className='text-center text-2xl'>Mobile Recharge Done:)</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Phone Number
                            </label>
                            <div className="mt-2">
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="text"
                                    autoComplete="phoneNumber"

                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 pl-3"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                                    Operator
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="op"
                                    name="op"
                                    type="text"
                                    autoComplete="op"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 pl-3"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Location
                            </label>
                            <div className="mt-2">
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    autoComplete="city"

                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 pl-3"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={() => navigate("/plans")}
                                className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                            >
                                Next
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
