import logo from "./logo.svg";
import "./App.css";
import Ippopay_Password from "./Ippopay_Password";
import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import UserDetails from "./userDetails_Page";
import Assetcreation from "./Asset_Creation";

function App() {
  const [PageRouteAccess, setPageRouteAccess] = React.useState();
  const [storeUserName, setStoreUserName] = React.useState();
  return (
    <>
      <Fragment>
        <Router>
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <Ippopay_Password
                    setPageRouteAccess={setPageRouteAccess}
                   
                  />
                }
              />
              <Route path="/userDetails" element={<UserDetails  setStoreUserName={setStoreUserName} />} />
              <Route path="/assets" element={<Assetcreation storeUserName={storeUserName} />} />
            </Routes>
          </div>
        </Router>
      </Fragment>
    </>
  );
}

export default App;
