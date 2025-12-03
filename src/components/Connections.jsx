import { useEffect } from "react";
import axios from "axios";
import { useDispatch,useSelector} from "react-redux";
import { addConnections} from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
const connections = useSelector((state) => state.connections);


  const fetchConnections = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/users/connection",
        { withCredentials: true }
      );
      console.log("API RESPONSE =", res.data.data);
        dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log("Error fetching connections:", err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return <h2>Loading...</h2>;
  if (connections.length === 0) return <h2>No connections yet</h2>;

  return (
    <div className="connection-page">
      <h1>Your Connections</h1>

      <div className="connection-grid">
        {connections.map((user) => (
          <div key={user._id} className="connection-card">
            
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="profile-img" alt="" />

            <h3>{user.firstName} {user.lastName}</h3>
            <p className="about">{user.about}</p>

            <div className="skills">
              {user.skills}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Connections;
