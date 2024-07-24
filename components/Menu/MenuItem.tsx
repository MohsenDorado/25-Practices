"use client"
import { useState } from "react";
import List from "./List";

const MenuItem = ({ item }: { item: any }) => {
  const [displayCurrent, setDisplayCurrent] = useState<any>({});

  const handleToggleChild=({label}:{label:any})=>{
    setDisplayCurrent({...displayCurrent,[label]:!displayCurrent[label],})
    console.log(displayCurrent);
    

  }

  
  

  {console.log(displayCurrent)
  }
  return (
    <li>
      <div
      onClick={()=>handleToggleChild(item.label)}
      className=" flex items-center justify-center gap-2">
        <p>{item.label}</p>
        {item.children? (
          <span>+</span>
        ) : null}
        
      </div>
      {item.children? (
        <List list={item.children} />
      ) : null}
    </li>
  );
};
export default MenuItem;
