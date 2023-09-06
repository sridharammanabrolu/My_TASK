// import Grid from '@mui/material/Grid';
import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Ippopay_Password({
  setPageRouteAccess,
}) {
  const myRef = useRef(null);
  const navigate = useNavigate();
  const [storePassword, setStorePassword] = React.useState();
  const [userName, setUserName] = React.useState();
  const [error, setError] = React.useState(false);

  const onPasswordChange = (event) => {
    console.log("data", event.target.value);
    setStorePassword(event.target.value);
  };

  const onUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("event", storePassword);
    console.log("event", userName);
    if (userName === "dev" && storePassword === "dev@1234") {
      setPageRouteAccess(true);
      navigate("/userDetails");
      // setStoreUserName(dev)
    } else {
      setError(true);
      // setPageRouteAccess(false)
      // navigate("/assets");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item container lg={12} md={12} justifyContent="center" m={10}>
            <Card sx={{ width: "30%", height: "600px" }}>
              <center>
                <Stack spacing={4} justifyContent={"space-around"} mt={15}>
                  <Grid>
                    <TextField
                      label="UserName"
                      value={userName}
                      onChange={onUserNameChange}
                    ></TextField>
                  </Grid>
                  <Grid>
                    <TextField
                      label="Password"
                      value={storePassword}
                      onChange={onPasswordChange}
                    ></TextField>
                  </Grid>
                  <Grid>
                    <Button variant="contained" type="submit">
                      Login
                    </Button>
                  </Grid>
                </Stack>
              </center>
              {error === true ? <Typography>Invalid user</Typography> : ""}
            </Card>
          </Grid>
        </Grid>
      </form>
     
    </>
  );
}
