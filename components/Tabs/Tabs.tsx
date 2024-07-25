"use client"
import React, { useState } from 'react'

interface Tabs{
    
}
const tabsData=[
    {
        label:"Tab1",
        content:<div>Tab1 Content</div>
    },
    {
        label:"Tab2",
        content:<div>Tab2 Content</div>


    },
    {
        label:"Tabs3",
        content:<div>Tab3 Content</div>

    },
]
const Tabs = (onChange:any) => {
    const [currentTab, setCurrentTab] = useState(0)
    function handleClick(currentIndex:number){
        setCurrentTab(currentIndex)

    }
  return (
    <div>

    <div className='flex items-center justify-center flex-row gap-8 mt-4'  >
        {
            tabsData.map((tabItem:any,index:number)=>(

                <button
                className='border rounded-md py-2 px-5 hover:bg-sky-50'
                onClick={()=>{handleClick(index)}}
                key={tabItem.label}>
                    {tabItem.label}

                </button>
            ))
        }

    </div>
    <div className='flex items-center justify-center mt-6 flex-col'>
        {
        }
        <div className='font-extrabold text-6xl text-center'>
            SPA{tabsData[currentTab].content}
        </div>


    </div>
    </div>

  )
}

export default Tabs