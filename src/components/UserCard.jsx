import axios from "axios";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

const BigFeedCard = ({ user }) => {
  const dispatch = useDispatch();

  if (!user) return null;

  const handleAction = async (status, userid) => {
    try {
      // ✔ Correct API route (same style as request page)
      await axios.post(
        `http://localhost:8000/request/review/${status}/${userid}`,
        {},
        { withCredentials: true }
      );

      dispatch(removeFeed(userid)); // remove from UI

    } catch (err) {
      console.log("Action error:", err);
    }
  };
  

  return (
    <div className="feed-container">
      <div className="feed-card">

        <img
          src= "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
          className="feed-img"
        />

        <h2 className="feed-name">
          Name: {user.firstName} {user.lastName}
        </h2>

        <p className="feed-about"><strong>Age:</strong> {user.age || "Not Available"}</p>
        <p className="feed-about"><strong>Gender:</strong> {user.gender || "Not Available"}</p>
        <p className="feed-about"><strong>About:</strong> {user.about || "No description"}</p>

        <p className="feed-skill-title">
          <strong>Skills:</strong>{" "}
          {Array.isArray(user.skills) ? user.skills.join(", ") : "No skills added"}
        </p>

        <div className="feed-buttons">

          {/* ❌ IGNORE */}
          <button
            className="btn-ignore"
            onClick={() => handleAction("rejected", user._id)}
          >
            ❌ IGNORE
          </button>

          {/* ✔ INTERESTED */}
          <button
            className="btn-interested"
            onClick={() => handleAction("intersed", user._id)}
          >
            ✔ INTERESTED
          </button>

        </div>

      </div>
    </div>
  );
};

export default BigFeedCard;
