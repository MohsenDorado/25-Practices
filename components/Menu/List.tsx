"use client"
import MenuItem from "./MenuItem";


const List = ({list}:{list:any}) => {    
    return (
        
      <div>
  
      {list
          ? list.map((item:any) => (
              <ul key={item.label} className="my-3 ml-9">
                <MenuItem item={item} />
              </ul>
            ))
          : null} 
              </div>
   )
  }
  export default List;