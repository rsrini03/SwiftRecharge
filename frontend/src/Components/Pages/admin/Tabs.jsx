import React, { useState } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        "Popular plans",
        "Add on",
        "Recommended",
    ];

    return (
        <div className="flex justify-center items-center w-full">
            <div style={{ width: "100%" }}>

                <ul className="flex justify-center items-center my-4 ">
                    {tabs.map((tab, index) => (
                        <li key={index} className={`cursor-pointer py-3 px-15 rounded transition text-center ${activeTab === index ? 'bg-teal-600 text-white' : ' text-gray-500'}`} onClick={() => setActiveTab(index)} style={{ width: "100%" }}>
                            {tab}
                        </li>
                    ))}
                </ul>
                <div className="w- bg-white p-16 text-center mx-auto border">
                    {tabs.map((tab, index) => (
                        <div key={index} style={{ display: activeTab === index ? 'block' : 'none' }}>
                            <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-purple3 mb-2">
                                <div className="flex justify-between items-center">
                                    <div className='flex'>
                                        <div className='md:mr-40'>
                                            <div className="text-2xl font-semibold text-purple3">₹ 199</div>
                                            <div className="text-gray-700">Unlimited Calls</div>
                                        </div>
                                        <div className='md:mr-40'>
                                            <div className="text-2xl font-semibold text-purple3">28</div>
                                            <div className="text-gray-700">Validity</div>
                                        </div>
                                        <div className='md:mr-10'>
                                            <div className="text-2xl font-semibold text-purple3">3 GB/Day</div>
                                            <div className="text-gray-700">Data</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-center items-center">
                                            <a onClick={() => navigate('/mobile-recharge')} className="relative rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300 bg-teal-600">
                                                <span className="relative">Apply</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Tabs;