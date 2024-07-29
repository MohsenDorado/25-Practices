import useMobileRoutes from '@/hooks/useMobileRoutes'
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react'

const MobileFooter = () => {
    const mobileRoutes=useMobileRoutes();
  return (
    <div className=' md:hidden bottom-0  fixed  w-full flex border-t-2 border-opacity-75 shadow-lg h-[100px]  '>
        
        {mobileRoutes.map((route)=>(

            <Link href={route.href} className={clsx(`
                
                flex-1
                flex-col
                grid-cols-2
                group 
                flex 
                gap-x-3 
                text-sm 
                leading-6 
                font-semibold 
                items-center
                justify-center 
                p-4 
                text-gray-500 
                 
                
              `,
                route.active && 'text-black ',
              )} >
                <route.icon  className={`w-5 h-5 ${route.active&&"fill-black transition-all duration-500 h-7 w-7 ease-in-out"}`}/>
                <p className={`${route.active&&"text-black transition-all duration-500 ease-in-out"}`}>
                     {route.label}
                    </p>
            </Link>
        ))}

    </div>
  )
}

export default MobileFooter