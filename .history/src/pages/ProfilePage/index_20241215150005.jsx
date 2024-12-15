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
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="bg-gray-100 ">
      <Navbar />
    </div>
  );
};
