"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<any>([]);
  const [searchParams, setSearchParams] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const handleChange = (e: any) => {
    const query = e.target.value.toLowerCase().trim();
    setSearchParams(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users
              .map(
                (item: any) =>
                  `${item.firstName} ${item.lastName} ${item?.maidenName}`
              )
              .filter(
                (item: any) =>
                  item.toLowerCase().replace(/\s/g, "").indexOf(query) > -1
              )
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else if (query.length > 1) {
      setShowDropDown(false);
    } else {
      setShowDropDown(false);
    }
  };

  const fetchList = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      if (data && data?.users?.length > 0 && data.users) {
        setUsers(data.users);
      }

      //   if (data&&data?.users?.length>0&&data.users) {
      //      setUsers(data.users.map((item:any)=>(`${item.firstName} ${item.lastName} ${item?.maidenName}`)))
      //   }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  console.log(users, filteredUsers);

  return (
    <div className="flex items-center justify-center flex-col">
      <input
        value={searchParams}
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="Search users"
        className="border rounded-xl py-2 px-2 m-4 w-[95%] md:w-[75%] lg:w-[50%]  "
      />
      <div>
        {loading&&"Loading"}

      </div>
      <div className="grid  w-[95%] md:w-[75%] lg:w-[50%] mx-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {loading===false&&users.length>0&&filteredUsers.length>0&&searchParams.length>1?
        (
            filteredUsers.map((user,i)=>(
                <div key={i} className=" bg-slate-50 w-full h-[100px] p-3 rounded-xl flex flex-col justify-center">
                    <p className="text-center">

                    {user}
                    </p>
                    <p>
                       
                    </p>

                </div>
            ))
        )
        :(
            null
        )}
       

        
        {/* <div className="bg-green-500 h-[100px] w-full"></div>
        <div className="bg-green-100 h-[100px] w-full"></div> */}
      </div>
      {loading!==true&&filteredUsers.length<1&&searchParams.length>1?
        <p>No One Found!!!</p>  
        :
        ''
    }

    </div>
  );
};

export default Search;
