import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import image from "../src/Images/3442937.jpg";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Login() {
  const userSchema = Yup.object().shape({
    user_email: Yup.string().email().required("email id is required"),
    user_password: Yup.string().required("password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const webMatches = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  function DashboardBannerImage() {
    const [errorView, setError] = React.useState( );
        
    console.log("error", errorView);
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
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      padding: "100px",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
    };

    const onFormSubmit = async (data) => {
      const response = await axios({
        method: "POST",
        url: `https://snapkaro.com/eazyrooms_staging/api/userlogin`,
        data: data,
      });
      console.log("response", response);
      if (response.data.status === true) {
        localStorage.setItem(
          "userData",
          JSON.stringify(response.data.user_data)
        );
        navigate("/dashboard");
        window.location.reload();
      } else if( response.data.status === false) {
        alert("Invalid credentials")
        setError(response?.data?.msg);
        console.log("errorssssssssssssss", response?.data?.msg);
      }
    };


    return (
      <Grid style={{ position: "relative" }} m={4} md={12} lg={12} sm={12}>
        <img
          src={image}
          style={imageStyle}
          alt="Banner with username and password"
        />
        <Grid style={cardStyle}>
          {/* {errorView === true ? ( */}
          <Typography fontWeight={"bold"} fontSize={"20px"} m={3}>
            {errorView ? errorView : "Login Page"}
          </Typography>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <Stack m={2} sm={12}>
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
                type="password"
                helperText={errors.user_password?.message}
                error={errors.user_password ? true : false}
                {...register("user_password")}
              />
            </Stack>
            <Button
              variant="contained"
              sx={{ borderRadius: "25px", width: "100%", my: 2 }}
              type="submit"
            >
              login
            </Button>
          </form>
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <DashboardBannerImage />
    </>
  );
}
