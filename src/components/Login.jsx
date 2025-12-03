import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false); // false = signup, true = login

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]  = useState("");
  const [email, setEmail]        = useState("");
  const [password, setPassword]  = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // -------------------------
  // LOGIN FUNCTION
  // -------------------------
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/login",
        {
          emailId: email,
          password: password
        },
        { withCredentials: true }
      );

      dispatch(addUser(res.data));
      navigate("/body");
    } catch (err) {
      console.log("Login error:", err);
    }
  };


  // -------------------------
  // SIGNUP FUNCTION
  // -------------------------
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/signup",
        {
          firstName,
          lastName,
          emailId: email,
          password
        },
        { withCredentials: true }
      );

      dispatch(addUser(res.data));
      navigate("/body");

    } catch (err) {
      console.log("Signup error:", err);
    }
  };

  return (
    <div className="login-container">

      <div className="login-box">
        
        <h1>{isLogin ? "Login" : "Signup"}</h1>
        <p className="subtitle">
          {isLogin ? "Welcome back!" : "Create a new account"}
        </p>

        <form onSubmit={isLogin ? handleLogin : handleSignup}>

          {/* Show name fields only on Signup */}
          {!isLogin && (
            <>
              <input 
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />

              <input 
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </>
          )}

          <input 
            type="email" 
            placeholder="Enter Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input 
            type="password" 
            placeholder="Enter Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        {/* Toggle Navigation */}
        <p className="toggle-text" onClick={() => setIsLogin(!isLogin)}>
          {isLogin 
            ? "Don't have an account? Signup" 
            : "Already have an account? Login"}
        </p>

      </div>

    </div>
  );
};

export default Login;
