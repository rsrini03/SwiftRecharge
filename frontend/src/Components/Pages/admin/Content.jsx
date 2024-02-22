import React, { useEffect, useState } from 'react'
import AddPlan from './AddPlan';
import UserDetails from './UserDetails';
import RechargeHistory from './RechargeHistory';

const Content = ({activeLink}) => {

    const [content,setContent] = useState(null);

    useEffect(() => {
        const arr = {
            link1: <AddPlan />,
            link2: <UserDetails/>,
            link3: <RechargeHistory/>
        }
        setContent(arr[activeLink])
    }, [activeLink])


  return (
    <div>
      {content}
    </div>
  )
}

export default Content
