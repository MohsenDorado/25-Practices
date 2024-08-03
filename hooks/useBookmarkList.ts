import { useMemo, useState } from "react";

const [bookmarksList, setBookmarksList] = useState<any>([])
const useBookmarkList=(gotBookmark:any)=>{
    if (gotBookmark.length>0) {
        
    }
    let copyList=[...bookmarksList];
    const index=copyList.findIndex(item=>item.id===gotBookmark.id)
   



    useMemo(() => 
    {

        if (index===-1) {
            copyList.push(gotBookmark)
            
        }else {
            copyList.splice(index)
        }
        setBookmarksList(copyList)
    }
        
        
        
        
        
        , [gotBookmark])
        return bookmarksList;
}
export default useBookmarkList;