"use client";

import List from "./List";

const Menu = ({menu}:{menu:any}) => {
  return (
    <main className="h-[100vh] bg-slate-200">
      <div className="flex items-center">
        <menu className=" h-[100vh] w-[26%] flex justify-start max-lg:w-[50%]">
          <div className="m-5 font-semibold text-2xl">
            <List list={menu}/>
            
         
          </div>
        </menu>
      </div>
    </main>
  );
};

//!Components...............................................


export default Menu;
