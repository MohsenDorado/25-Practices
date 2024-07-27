"use client";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const GithubFinder = () => {
  const [username, setUsername] = useState("MohsenDorado");
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGit() {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();

      if (data) {
        setUserData(data);
        console.log(data);
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  const handleSubmit = () => {
    fetchGit();
  };
  useEffect(() => {
    fetchGit();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col ">
      <div>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          type="text"
          placeholder="search github"
          className="border p-2"
        />
        <button onClick={handleSubmit} className="border">
          Search
        </button>
      </div>
      <div className=" flex flex-col w-full sm:w-[75%] md:w-[65%] lg:w-[55%] xl:w-[45%] ">
        {
          loading&&
        <div className="bg-slate-50 p-2 rounded-xl flex flex-col items-center justify-center">

        <Loading/>
        
        </div>
        }
      </div>
      <div className=" flex flex-col w-full sm:w-[75%] md:w-[65%] lg:w-[55%] xl:w-[45%] ">
        {userData && userData.status == "404" ? (
          <div className={`flex items-center justify-center text-center ${loading && "hidden "}`}>NotFound!</div>
        ) : (
          <div className={`bg-slate-50 p-2 rounded-xl flex flex-col items-center justify-center ${loading && "hidden"}`}>
              <img
                className="w-20 h-20 rounded-full"
                src={userData && userData.avatar_url}
                alt="Avatar"
              />
              <div className=" my-4 text-2xl font-extrabold tracking-widest">
                {userData&&userData.login}

              </div>
            <div className="flex items-center justify-between flex-row w-full text-2xl">
              <div className="w-[50%] text-center">

              {userData && `Following: ${userData.following}`}
              </div>

            <div className="w-[50%] text-center">
              {userData && `Followers:${userData.followers}`}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GithubFinder;
