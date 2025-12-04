import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { removeUser, addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";


const Body = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);  // Sidebar State

  const checkUser = async () => {
    try {
      const res = await axios.get("https://devlink-backend-zt4c.onrender.com/profile", {
        withCredentials: true,
      });

      dispatch(addUser(res.data));
    } catch (err) {
      console.log("User not logged in");
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://devlink-backend-zt4c.onrender.com/logout",
        {},
        { withCredentials: true }
      );

      dispatch(removeUser());
      navigate("/");
    } catch (err) {
      console.log("Logout error:", err);
    }
  };

  return (
    <>
    

  <div className="body-hamburger" onClick={() => setOpen(!open)} style={{

        }}>
        ☰
      </div>
     
      <div className="body-header-bar">
        <span className="body-welcome">Welcome, {user?.firstName}</span>

        <img
          src={

            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          }
          className="body-user-photo"
          alt="profile"
        />

        <button className="body-logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

     <Sidebar open={open} />
     <div className="body-main-area">
      <Feed />
    </div>
     </>

);

  
};

export default Body;
