import axios from "axios";
import { useState } from "react";
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

  return (
    <div>
      <h1>ini profile</h1>
    </div>
  );
};
