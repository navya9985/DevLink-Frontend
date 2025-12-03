import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import BigFeedCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const fetchFeed = async () => {
    if (feed.length>0) return; // ensure feed loads only once
    try {
      const res = await axios.get("http://localhost:8000/users/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data.feedusers));

      console.log(res.data.feedusers);
    } catch (err) {
      console.log("Feed error:", err);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

   if (feed.length === 0) {
    return <h2 className="no-request">No New Users Found</h2>;
  }
  return (

    <div >
        <BigFeedCard  user={feed[0]}/>
    </div>
  );
};

export default Feed;