import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequests ,removeRequests} from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.requests);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9000/users/request",   // your API
        { withCredentials: true }
      );

      console.log("REQUESTS API =", res.data);

      // Save array in redux
      dispatch(addRequests(res.data.pendingrequest));

    } catch (err) {
      console.log("Error fetching requests:", err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // ⭐ Accept or Reject Request
  const handleRequest = async (status, id) => {
    try {
      await axios.post(
        `http://localhost:8000/request/review/${status}/${id}`,
        {},
        { withCredentials: true }
      );

      dispatch(removeRequests(_id));

    } catch (err) {
      console.log("Request update error:", err);
    }
  };

  if (requests.length === 0) {
    return <h2 className="no-request">No Pending Requests</h2>;
  }

  return (
    <div className="request-page">
      <h1>Pending Requests</h1>

      <div className="request-grid">

        {requests.map((req) => (
          <div key={req._id} className="request-card">
            
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
              className="profile-img" 
              alt="" 
            />

            <h3>{req.fromuserid.firstName} {req.fromuserid.lastName}</h3>

            <p className="about">{req.fromuserid.about}</p>

            <div className="skills">
              {req.fromuserid.skills}
            </div>

            <div className="req-btns">
              <button 
                className="accept-btn"
                onClick={() => handleRequest("accepted", req._id)}
              >
                Accept
              </button>

              <button 
                className="reject-btn"
                onClick={() => handleRequest("rejected", req._id)}
              >
                Reject
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Requests;
