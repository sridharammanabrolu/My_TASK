import { Button, Card, Grid, Stack, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Assetcreation({ storeUserName, setPageRouteAccess }) {
  const navigate = useNavigate();
  const [assetName, seTAssetName] = React.useState();

  const handleAssetChange = (event) => {
    seTAssetName(event.target.value);
  };

  const [quantity, setQuantity] = React.useState();

  const handleQuantityChange = (event) => {
    if (event.target.value < !0) {
      alert("quantity value should be greater the zero");
    } else {
      setQuantity(event.target.value);
    }
  };

  const [cost, setCost] = React.useState();

  const haqndlecostChange = (event) => {
    if (event.target.value < !0) {
      alert("cost value should be greater the zero");
    } else {
      setCost(event.target.value);
    }
  };
  const handleSubmit = async () => {
    if (storeUserName === null || storeUserName === undefined) {
      alert("Cannot Process the request ");
    } else if (quantity < !0) {
      alert("quantity value should be greater the zero");
    }
    let reqObject = {
      AssestName: assetName,
      quantity: parseInt(quantity),
      cost: cost,
      userName: storeUserName,
    };
    console.log("reqObject", reqObject);

    const response = await axios({
      method: "POST",
      url: `http://localhost:4000/bookpublisher/assertcreation`,
      data: reqObject,
    });
    if (response.data.data.value === "Assert Name already exists") {
      alert("Assert Name already exists");
    } else if (response.data.headers.code === 600) {
      alert("Assert created successfully");
      navigate("/");
      setPageRouteAccess(false);
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
                    label="Asset Name"
                    onChange={handleAssetChange}
                  ></TextField>
                </Grid>
                <Grid>
                  <TextField
                    label="Quantity"
                    onChange={handleQuantityChange}
                    type="number"
                  ></TextField>
                </Grid>
                <Grid>
                  <TextField
                    label="Cost"
                    type="number"
                    onChange={haqndlecostChange}
                  ></TextField>
                </Grid>
                <Grid>
                  <Button
                    variant="contained"
                    onClick={() => {
                      handleSubmit();
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
