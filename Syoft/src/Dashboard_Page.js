import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useLocation, useNavigate } from "react-router-dom";

export default function TimeSheet() {
  const localUserData = JSON.parse(localStorage.getItem("userData"));
  console.log("localUserDatajjjjjjjjjjjjjjjjjjjjj", localUserData[0]?.user_id);
  const navigate = useNavigate();

  const onLogoutClick = () => {
    navigate("/");
    localStorage.removeItem('userData')
    window.location.reload()
  }
  return (
    <>
      <Grid onClick = {() => {
        onLogoutClick()
      }}>
        <Button variant="contained">Logout</Button>
      </Grid>
      <Grid
        container
        item
        justifyContent={"space-evenly"}
        alignSelf={"space-evenly"}
      >
        <Card
          sx={{
            width: "40%",
            backgroundColor: "#FAF3F0",
            padding: "10vh",
            height: "40vh",
            mt: 10,
          }}
        >
          <Grid className="d-flex align-items-center justify-content-center header">
            <h2 className="head">MY PROFILE</h2>
          </Grid>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
          >
            <Grid>
              <Avatar style={{ width: "100px", height: "100px" }}>H</Avatar>
            </Grid>
            {localUserData?.map((data, index) => (
              <Grid item spacing={3}>
                <Stack
                  direction="column"
                  justifyContent="space-evenly"
                  alignItems="space-evenly"
                  spacing={2}
                >
                  <Grid item>
                    <Typography>
                       USERID :
                        {data.user_id}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography> FIRSTNAME : {data.user_firstname}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography> LASTNAME : {data.user_lastname}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography> EMAILID : {data.user_email}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography> MOBILE : {data.user_phone}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography> CITY: {data.user_city}</Typography>
                  </Grid>
                </Stack>
              </Grid>
            ))}
          </Stack>
        </Card>
      </Grid>
    </>
  );
}
