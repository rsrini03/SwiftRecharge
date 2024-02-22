import React, { useState } from 'react'
import SideBar from './SideBar'
import Content from './Content'

const DashBoard = () => {

  const [activeLink, setActiveLink] = useState("link1");

  return (
    <div className='flex'>
      <SideBar setActiveLink={setActiveLink} />
      <Content activeLink={activeLink} />
    </div>
  )
}

export default DashBoard
