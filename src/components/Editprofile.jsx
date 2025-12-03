import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const reduxUser = useSelector((store) => store.user);

  // ⭐ Initial values directly from Redux
  const [firstName, setFirstName] = useState(reduxUser?.firstName || "");
  const [lastName, setLastName] = useState(reduxUser?.lastName || "");
  const [age, setAge] = useState(reduxUser?.age || "");
  const [gender, setGender] = useState(reduxUser?.gender || "");
  const [about, setAbout] = useState(reduxUser?.about || "");
  const [skills, setSkills] = useState(
    reduxUser?.skills ? reduxUser.skills.join(", ") : ""
  );
  const [photourl, setPhotourl] = useState(reduxUser?.photourl || "");

  // ⭐ Update profile API
  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      age: Number(age),
      gender,
      about: about.trim(),
      photourl: photourl.trim(),
      skills: skills.trim()
        ? skills.split(",").map((s) => s.trim())
        : [],
    };

    try {
      // API call
      const res = await axios.patch(
        "http://localhost:8000/profile/edit",
        updatedData,
        { withCredentials: true }
      );

      // ⭐ Update Redux store
      dispatch(addUser(updatedData));

      alert("Profile Updated Successfully!");
      navigate("/body");
    } catch (err) {
      console.log("Update Error:", err);
      alert("Update Failed!");
    }
  };

  return (
    <div className="edit-profile-container">
      <div className="edit-form">
        <h1>Edit Profile</h1>

        <form onSubmit={handleUpdate}>
          
          <label>First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <label>Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <label>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>

          <label>About</label>
          <textarea
            rows="3"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />

          <label>Skills (comma separated)</label>
          <input
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Java, React, Node"
          />

        

          <button type="submit" className="edit-submit-btn">
            Update Profile
          </button>

        </form>
      </div>
    </div>
  );
};

export default EditProfile;
