import {
  Box,
  Button,
  Checkbox,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import imageData from "../src/Images/3350438.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function UserDetails_page() {
  const userSchema = Yup.object().shape({
    user_firstname: Yup.string()
      .required("user name is required")
      .required("user name is required")
      .min(3, "Minimum of three characters ")
      .max(50, "Maximum of 50 characters"),
    user_email: Yup.string().email().required("email id is required"),
    user_password: Yup.string().required("password is required"),
    user_phone: Yup.string()
      .required("mobile number is required")
      .min(10, "Mobile number should be 10 digits")
      .max(10, "Mobile number should be 10 digits"),
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const webMatches = useMediaQuery("(min-width:600px)");

  function DashboardBannerImage() {
    const imageStyle = {
      width: "80%",
      height: "760px",
    };

    const mobileimagestyle = {
      width: "70%",
      height: "200px",
    };

    const mobileContainerStyle = {
      display: "flex",
      justifyContent: "center",
    };

    const containerStyle = {
      backgroundColor: "#FAF3F0", // Replace "your-color-here" with your desired background color
      display: "flex",
      justifyContent: "center",
    };

    return (
      <div style={webMatches ? containerStyle : mobileContainerStyle}>
        <img
          src={imageData}
          style={webMatches ? imageStyle : mobileimagestyle}
        />
      </div>
    );
  }

  function UserDetails() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    const onFormSubmit = async (data) => {
      console.log("data", data);
      let reqobject = {
        ...data,
        user_lastname: "S",
        user_city: "Chennai",
        user_zipcode: "230456",
      };
      console.log("reqggggggg", reqobject);
      const response = await axios({
        method: "POST",
        url: `https://snapkaro.com/eazyrooms_staging/api/user_registeration`,
        data: reqobject,
      });
      console.log("response", response);
      if (response.data.status === true) {
        navigate("/login");
      }
    };
    console.log("checked", checked);

    const onSigninClick = () => {
      navigate("/login");
    };
    return (
      <>
        {/* <ToastContainer closeButton={false} hideProgressBar={true} autoClose={3000} /> */}
        <Grid>
          <Typography fontWeight={"bold"} fontSize={"20px"}>
            Sign Up
          </Typography>

          <Typography fontSize={"15px"}>
            Already have an account?
            <Typography
              onClick={() => {
                onSigninClick();
              }}
            >
              Sign in
            </Typography>
          </Typography>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <Stack direction={"column"}>
              <Typography my={2}>Full Name *</Typography>
              <TextField
                size="small"
                helperText={errors.user_firstname?.message}
                error={errors.user_firstname ? true : false}
                {...register("user_firstname")}
              />
              <Typography my={2}>Email Address *</Typography>
              <TextField
                size="small"
                helperText={errors.user_email?.message}
                error={errors.user_email ? true : false}
                {...register("user_email")}
              />
              <Typography my={2}>Password *</Typography>
              <TextField
                size="small"
                helperText={errors.user_password?.message}
                error={errors.user_password ? true : false}
                {...register("user_password")}
              />
              <Typography my={2}>Phone number*</Typography>
              <TextField
                type="number"
                size="small"
                helperText={errors.user_phone?.message}
                error={errors.user_phone ? true : false}
                {...register("user_phone")}
              />
            </Stack>
            <Stack direction={"row"} my={2}>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography mt={1}>
                {"I agree to the Trems of Services and Privacy Policy"}
              </Typography>
            </Stack>
            <Button
              variant="contained"
              sx={{ borderRadius: "25px", width: "100%" }}
              type="submit"
              disabled={checked === false}
            >
              Create your free account
            </Button>
          </form>
        </Grid>
      </>
    );
  }

  return (
    <>
      <Grid container padding={3}>
        {webMatches ? (
          <Grid container sx={{ backgroundColor: "#FAF3F0" }}>
            <Grid item lg={8} md={8} sm={8}>
              <DashboardBannerImage />
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={3}
              justifyContent={"center"}
              alignSelf={"center"}
            >
              <UserDetails />
            </Grid>
          </Grid>
        ) : (
          <Grid>
            {/* <Grid item lg={3} md={3} sm={3}>
              <DashboardBannerImage />
            </Grid> */}
            <Grid
              // md={4}
              justifyContent={"center"}
              alignItems={"center"}
              style={{ backgroundColor: "white" }}
              padding={6}
            >
              <UserDetails />
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
}
