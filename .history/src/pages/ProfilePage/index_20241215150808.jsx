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
    <div className="bg-gray-100 ">
      <Navbar />
      <div>
        <h1></h1>
      </div>
    </div>
  );
};
