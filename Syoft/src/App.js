import logo from "./logo.svg";
import "./App.css";
import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Login from "./login_Page";
import UserDetails_page from "./userDetails_page";
import TimeSheet from "./Dashboard_Page";

function App() {
  const localUserData = localStorage.getItem('userData')
  console.log("localUserData33333333333333", localStorage.getItem('userData'));
  return (
    <>
      <Fragment>
        <Router>
          <div>
            <Routes>
              {localUserData?.length > 0 ? (
                <Route path="/dashboard" element={<TimeSheet />} />
              ) : (
                <>
                  <Route path="/" element={<UserDetails_page />} />
                  <Route path="/login" element={<Login />} />
                </>
              )}
            </Routes>
          </div>
        </Router>
      </Fragment>
    </>
  );
}

export default App;
