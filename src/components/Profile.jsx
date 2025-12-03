import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:8000/profile", {
        withCredentials: true,
      });
      console.log("PROFILE DATA:", res.data);

      setUser(res.data || {});  // safe fallback
    } catch (err) {
      console.log("Error fetching profile", err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!user) {
    return <h2 style={{ padding: "30px" }}>Loading profile...</h2>;
  }

  return (
    <div className="profile-container">

      <h1 style={{ color: "#6C00FF" }}>Your Profile</h1>

      <div
        style={{
          marginTop: "25px",
          padding: "25px",
          background: "#ffffff",
          borderRadius: "14px",
          width: "380px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <img
          src={
            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          }
          style={{
            width: "110px",
            height: "110px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "3px solid #6C00FF",
          }}
        />

        <h2 style={{ marginTop: "18px", color: "#6C00FF" }}>
          {user.firstName || ""} {user.lastName || ""}
        </h2>

        <p><strong>Email:</strong> {user.emailId || "Not Available"}</p>

        <p><strong>Age:</strong> {user.age || "Not Available"}</p>

        <p><strong>Gender:</strong> {user.gender || "Not Available"}</p>

        <p><strong>About:</strong> {user.about || "No description"}</p>

        <p>
          <strong>Skills:</strong>{" "}
          {(user.skills && Array.isArray(user.skills)) 
            ? user.skills.join(", ") 
            : "No skills added"}
        </p>

      </div>
    </div>
  );
};

export default Profile;
