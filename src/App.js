// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import * as React from "react";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Dashboard from "./Dashboard/Dashboard";
import SignInSide from "./Auth/SignInSide";
import SignUpSide from "./Auth/SignUpSide";
import Posts from "./Posts/Posts";
import Details1 from "./Details/Details1";
import Details2 from "./Details/Details2";
import "./Posts.css";
import "./EditProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SendPostForm from "./SendPost/SendPostForm";
import SendReqForm from "./SendReq/SendReqForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Auth/SignInSide" element={<SignInSide />} />
          <Route exact path="/Auth/SignUpSide" element={<SignUpSide />} />
          <Route exact path="/Posts/Posts" element={<Posts />} />
          <Route exact path="/Posts/Posts" element={<Posts />} />
          <Route exact path="/Dashboard/Dashboard" element={<Dashboard />} />
          <Route
            exact
            path="/SendPost/SendPostForm"
            element={<SendPostForm />}
          />
          <Route exact path="/Details/Details1" element={<Details1 />} />
          <Route exact path="/Details/Details2" element={<Details2 />} />
          <Route exact path="/SendReq/SendReqForm" element={<SendReqForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
