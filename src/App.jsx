import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import {Provider} from "react-redux";
import Appstore from "./utils/Appstore";
import Body from "./components/Body";
import Profile from "./components/Profile";
import EditProfile from "./components/Editprofile";
import Connections from "./components/Connections";
import Requests from "./components/Requests";

function App() {
  return (
    <Provider store={Appstore}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
           <Route path="/body" element={<Body />} />
            <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/requests" element={<Requests />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
