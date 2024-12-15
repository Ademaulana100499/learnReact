import axios from "axios";
import { Navbar } from "../../components/Navbar";
import { useState, useEffect } from "react";
export const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const getProfile = async () => {
    const token = localStorage.getItem("access_token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const res = await axios.get("https://dummyjson.com/auth/me", config);
      console.log(res);
      setProfile(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="max-w-md p-6 mx-auto mt-10 bg-white rounded-lg shadow-md">
        <h1>{profile.username}</h1>
        <h1>{profile.email}</h1>
      </div>
    </div>
  );
};
