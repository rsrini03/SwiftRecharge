import React from 'react'

const SideBar = ({ setActiveLink }) => {

  const handleLinkClick = (link) => {
    console.log(link);
    setActiveLink(link);
  }

  return (
    <>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-screen w-full max-w-[15rem] p-4 shadow-xl shadow-teal-gray-900/5">
        <div className="mb-2 p-4">
          {/* <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">SWIFTRECHARGE</h5> */}
          <div className="flex lg:flex-1 items-center justify-center">
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
        </div>
        <nav className="flex flex-col gap-1 min-w-[200px] p-2 font-sans text-base font-normal text-gray-700">
          <div role="button" onClick={() => handleLinkClick("link1")} tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-teal-50 hover:bg-opacity-80 focus:bg-teal-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-teal-900 focus:text-teal-900 active:text-teal-900 outline-none">
            <div className="grid place-items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><circle cx="12" cy="12" r="9" fill="#0d9488" fillOpacity="0.4" /><path stroke="#0d9488" strokeLinecap="square" strokeWidth="1.2" d="M12 15V9m3 3H9" /></g></svg>            </div>
            Add plan
          </div>
          <div role="button" onClick={() => handleLinkClick("link2")} tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-teal-50 hover:bg-opacity-80 focus:bg-teal-50 focus:bg-opacity-80 active:bg-teal-50 active:bg-opacity-80 hover:text-teal-900 focus:text-teal-900 active:text-teal-900 outline-none">
            <div className="grid place-items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#0d9488" d="M14 4h-4C6.229 4 4.343 4 3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4" opacity="0.5" /><path fill="#0d9488" d="M13.25 9a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M9 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 6c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2" /></svg>
            </div>User Details
          </div>
          <div role="button" onClick={() => handleLinkClick("link3")} tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-teal-50 hover:bg-opacity-80 focus:bg-teal-50 focus:bg-opacity-80 active:bg-teal-50 active:bg-opacity-80 hover:text-teal-900 focus:text-teal-900 active:text-teal-900 outline-none">
            <div className="grid place-items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#0d9488" d="M12 2a10.017 10.017 0 0 0-6.994 2.872V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2H6.218A7.98 7.98 0 1 1 4 12a1 1 0 0 0-2 0A10 10 0 1 0 12 2" /><path fill="#0d9488" d="M14 13h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2h1a1 1 0 0 1 0 2" /><path fill="#0d9488" d="M12 4a8.008 8.008 0 0 0-5.782 2.5h2.288a1 1 0 0 1 0 2h-4.5a.99.99 0 0 1-.978-.889A9.922 9.922 0 0 0 2 12a1 1 0 0 1 2 0a8 8 0 1 0 8-8m2 9h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2h1a1 1 0 0 1 0 2" opacity="0.5" /></svg>
            </div>Recharge History <div className="grid place-items-center ml-auto justify-self-end">
              <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-teal-500/20 text-teal-900 py-1 px-2 text-xs rounded-full" style={{ opacity: "1" }}>
                <span className="">14</span>
              </div>
            </div>
          </div>
          <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-teal-50 hover:bg-opacity-80 focus:bg-teal-50 focus:bg-opacity-80 active:bg-teal-50 active:bg-opacity-80 hover:text-teal-900 focus:text-teal-900 active:text-teal-900 outline-none">
            <div className="grid place-items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#0d9488" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4m7.943 14.076A9.959 9.959 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.958 9.958 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22a9.947 9.947 0 0 0 5.675-1.765a10.055 10.055 0 0 0 1.918-1.728l.355-.413zM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd" /></svg>
            </div>Profile
          </div>
          <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-teal-50 hover:bg-opacity-80 focus:bg-teal-50 focus:bg-opacity-80 active:bg-teal-50 active:bg-opacity-80 hover:text-teal-900 focus:text-teal-900 active:text-teal-900 outline-none">
            <div className="grid place-items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#0d9488" fill-rule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2.008 2.008 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.615 1.615 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.026 2.026 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361c0 .558-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a1.99 1.99 0 0 0-.399 1.479c.053.394.287.798.757 1.605c.47.807.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2.008 2.008 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a1.99 1.99 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361c0-.558.306-1.064.782-1.36c.324-.203.533-.364.682-.556a1.99 1.99 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605c-.47-.807-.704-1.21-1.022-1.453a2.026 2.026 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.615 1.615 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2.007 2.007 0 0 0-1.09-1.083" clip-rule="evenodd" opacity="0.5" /><path fill="#0d9488" d="M15.523 12c0 1.657-1.354 3-3.023 3c-1.67 0-3.023-1.343-3.023-3S10.83 9 12.5 9c1.67 0 3.023 1.343 3.023 3" /></svg>
            </div>Settings
          </div>
          <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-teal-50 hover:bg-opacity-80 focus:bg-teal-50 focus:bg-opacity-80 active:bg-teal-50 active:bg-opacity-80 hover:text-teal-900 focus:text-teal-900 active:text-teal-900 outline-none">
            <div className="grid place-items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><g fill="#0d9488"><path d="M216 128a88 88 0 1 1-88-88a88 88 0 0 1 88 88" opacity="0.2" /><path d="M120 128V48a8 8 0 0 1 16 0v80a8 8 0 0 1-16 0m60.37-78.7a8 8 0 0 0-8.74 13.4C194.74 77.77 208 101.57 208 128a80 80 0 0 1-160 0c0-26.43 13.26-50.23 36.37-65.3a8 8 0 0 0-8.74-13.4C47.9 67.38 32 96.06 32 128a96 96 0 0 0 192 0c0-31.94-15.9-60.62-43.63-78.7" /></g></svg>
            </div>Log Out
          </div>
        </nav>
      </div>
    </>
  )
}

export default SideBar
