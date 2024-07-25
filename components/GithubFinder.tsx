"use client";
import React, { useEffect, useState } from "react";

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
    <div className="flex items-center justify-center flex-col">
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
      <div className="">
        {loading && "Loading"}
        {error && "Error!"}
      </div>
      <div>
        {userData&&userData.status=='404'?(

            <div className="bg-red-50">Not Found!!</div>
        ):(
                <div>

                    {userData&&`Followers:${userData.followers}`}
                </div>

        )}

      </div>
    </div>
  );
};

export default GithubFinder;
