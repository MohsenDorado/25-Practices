"use client"
import { Ratio, Star } from "lucide-react";
import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Stars = ({noOfStars}:{noOfStars:number}) => {

    const [hover, setHover] = useState(0);
    const [rate, setRate] = useState(0);



    const handleMouseEnter=(i:number)=>{     
        setHover(i)   

    }
    const handleMouseLeave=()=>{
        setHover(rate)

        
    }
    const handleMouseClick=(i:number)=>{
        setRate(i)
        if (rate===i) {
            setRate(0)
            
        }
        
    }


    return ( 
        <div>

        <div className="flex items-center justify-center gap-4 mt-3 bg-black">
            {
                [...Array(noOfStars)].map((_,i)=>{
                    i+=1;
                    return <FaStar
                     key={i}
                     className={i<=(hover||rate)?"active hover:scale-125 transition-all duration-500":"inactive hover:scale-125 transition-all duration-500"}
                     onClick={()=>handleMouseClick(i)}
                     onMouseEnter={()=>handleMouseEnter(i)}
                     onMouseLeave={()=>handleMouseLeave()}
                     size={40}

                     />
                     
                    })
            }

         
            
            
            
        </div>
            <div className="flex items-center justify-center font-extrabold text-xl">
               !امتیاز یادتون نره
            </div>
                    </div>
     );
}
 
export default Stars;