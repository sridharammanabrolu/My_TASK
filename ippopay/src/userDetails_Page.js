import { Button, Card, Grid, Stack, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function UserDetails({ setStoreUserName }) {
  const navigate = useNavigate();
  const [gender, setGender] = React.useState("male");

  const [selectedDate, setSelectedDate] = React.useState("");

  const [name, setName] = React.useState();

  const [age, setAge] = React.useState();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const onSubmit = async () => {
    let reqObject = {
      Name: name,
      Age: age,
      Gender: gender,
      DOB: selectedDate,
    };
    console.log("reqObject", reqObject);

    const response = await axios({
      method: "POST",
      url: `http://localhost:4000/bookpublisher/assetuserdetails`,
      data: reqObject,
    });
    console.log("response", response);
    if (response.data.data.value === "user already exists") {
      alert("user already exists");
      navigate("/assets");
      setStoreUserName(name);
    } else {
      navigate("/assets");
      setStoreUserName(name);
    }
    console.timeLog("response", response);
  };

  return (
    <>
      <Grid container>
        <Grid item container lg={12} md={12} justifyContent="center" m={10}>
          <Card sx={{ width: "30%", height: "600px" }}>
            <center>
              <Stack spacing={4} justifyContent={"space-around"} mt={15}>
                {/* <Grid item>
                                    <img src={loginImage} style={{ height: 200, width: 200 }} />
                                </Grid> */}
                <Grid>
                  <TextField
                    label="Name"
                    onChange={handleNameChange}
                  ></TextField>
                </Grid>
                <Grid>
                  <TextField label="Age" onChange={handleAgeChange}></TextField>
                </Grid>
                <Grid>
                  <div>
                    Gender:
                    {genderOptions.map((option) => (
                      <label key={option.value}>
                        <input
                          type="radio"
                          value={option.value}
                          checked={gender === option.value}
                          onChange={handleGenderChange}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </Grid>
                <Grid>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    style={{ width: "200px", height: "40px" }}
                  />
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    onClick={() => {
                      onSubmit();
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Stack>
            </center>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
