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
  TextField,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useLocation, useNavigate } from "react-router-dom";
import image from "../src/Images/3442937.jpg";
import newImage from "../src/Images/767A3526.JPG";

export default function TimeSheet() {
  const localUserData = JSON.parse(localStorage.getItem("userData"));
  console.log("localUserDatajjjjjjjjjjjjjjjjjjjjj", localUserData[0]?.user_id);
  const navigate = useNavigate();

  const onLogoutClick = () => {
    navigate("/");
    localStorage.removeItem("userData");
    window.location.reload();
  };
  const imageStyle = {
    width: "100%",
    height: "760px",
    position: "relative",
  };

  const cardStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#176B87",
    padding: "100px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
  };

  return (
    <Grid style={{ position: "relative" }} md={12} lg={12} sm={12}>
      <img
        src={image}
        style={imageStyle}
        alt="Banner with username and password"
      />
      <Grid style={cardStyle}>
        <Grid item ml={2}>
          <Typography color={"white"} fontSize={"24px"}>
            {/* {data.user_firstname} */}
            MY PROFILE
          </Typography>
        </Grid>
        <Grid justifyContent={"center"} ml={2}>
          <Avatar
            style={{ width: "150px", height: "140px" }}
            src={newImage}
          ></Avatar>
        </Grid>

        <Typography
          fontWeight={"bold"}
          fontSize={"20px"}
          m={3}
          color={"white"}
        ></Typography>
        <Stack m={2} sm={12}>
          {localUserData?.map((data, index) => (
            <Grid item spacing={3}>
              <Stack
                direction="column"
                justifyContent="space-evenly"
                alignItems="space-evenly"
                spacing={2}
              >
                {/* <Grid item>
                  <Typography>{data.user_id}</Typography>
                </Grid> */}
                <Grid item>
                  <Typography color={"white"} fontSize={"24px"}>
                    {data.user_firstname}
                  </Typography>
                </Grid>
                {/* <Grid item>
                  <Typography>{data.user_lastname}</Typography>
                </Grid> */}
                <Grid item>
                  <Typography color={"white"} fontSize={"24px"}>
                    {data.user_email}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color={"white"} fontSize={"24px"}>
                    {data.user_phone}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color={"white"} fontSize={"24px"}>
                    {data.user_city}
                  </Typography>
                </Grid>
              </Stack>
            </Grid>
          ))}
        </Stack>
        <Grid>
          <Typography
            color={"white"}
            sx={{ cursor: "pointer" }}
            onClick={() => {
              onLogoutClick();
            }}
          >
            Click here to logout.....
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
