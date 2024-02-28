import React from 'react'
import Tabs from './admin/Tabs'

const PlanDetails = () => {
    return (
        <div className='pt-20' >
            <div className='flex flex-col md:flex-row h-screen w-full'>
                <div className='md:w-2/4 bg-gray-100 flex justify-center items-center px-4'>
                    <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
                        <div className="flex items-start sm:gap-8">
                            <div
                                className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2"
                                aria-hidden="true"
                            >
                                <div className="flex items-center gap-1">
                                    <img src="/assets/Airtel.png"/>
                                </div>
                            </div>

                            <div>
                                <strong
                                    className="rounded border border-purple bg-purple px-3 py-1.5 text-[10px] font-medium text-white font-anuphan"
                                >
                                    6369442740
                                </strong>

                                <h3 className="mt-4 text-lg font-medium sm:text-xl">
                                    <p className="font-poppins"> Airtel</p>
                                </h3>

                                <p className="mt-1 text-sm text-gray-700 font-anuphan">
                                    Airtel Prepaid | Tamil Nadu
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="md:w-full bg-gray-200 py-4 px-4 overflow-y-auto">
                    <div className="mb-4">
                        <input type="text" placeholder="Search for a plan,eg.199" className="w-full p-4 border border-gray-300 rounded-lg" />
                    </div>
                    {/* <Tabs openTab={openTab} setOpenTab={setOpenTab} operatorName={operatorName} accessToken={accessToken} /> */}
                    <Tabs/>
                </div>
            </div>
        </div>
    )
}

export default PlanDetails
