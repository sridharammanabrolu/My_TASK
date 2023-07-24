// import Grid from '@mui/material/Grid';
import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import axios from 'axios';

export default function Ippopay_Password() {

    const [storePassword, setStorePassword] = React.useState()
    const [error, setError] = React.useState(false)
    const [viewError, setViewError] = React.useState()
    const [successResponse,setSuccessResponse] = React.useState()

    const onPasswordChange = (event) => {
        console.log("data", event.target.value)
        setStorePassword(event.target.value)
    }

    const onSubmit = async () => {

        const passw = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/
        let mapo = {};
        let password = storePassword;
        if (password.length > 5 && password.length < 19) {
            console.log("Success Password")
            console.log(passw.test(password), "regex pattern response");
            if (passw.test(password) === true) {
                console.log("Password Succcess")
            } else {
                setError(true)
                setViewError("password greater than 5 or less than 21cand must cointain atleast one upperCase,oneLowerCase and number")
                console.log("Password error")
            }
        } else {
            // throw new Error("password greater than 5 or less than 21");
            console.log("password greater than 5 or less than 21")
        }
        let r = password.toString().split("")
        r.forEach((element, ind) => {
            if (mapo[element.toString()]) {
                if (r[ind - 1] == element) {
                    mapo[element.toString()] = mapo[element.toString()] + 1;
                    return;
                }
            }
            mapo[element.toString()] = 1
        });
        console.log(Object.values(mapo), "+++++");
        if (Object.values(mapo).some(element => element >= 3)) {
            console.log("errordhdjk", password)
            setError(true)
            setViewError("Value should not have repeated characters")
        } else {
            console.log("error7777777777777777777777777", password)
            let reqBody = {
                Password: password
            }
            console.log("reqBodyreqBodyreqBody", reqBody)
            const response = await axios.post(
                `http://localhost:4000/bookpublisher/password`, reqBody
            )
            if (response) {
                setError(false)
                setSuccessResponse("success")
            }
            console.log("response", response)
        }
        console.log("password", password)
    }

    return (
        <>
            <Grid container>
                <Grid item container lg={12} md={12} justifyContent="center" m={10}>
                    <Card sx={{ width: "30%", height: "600px" }}>
                        <center>
                            <Stack spacing={4} justifyContent={'space-around'} mt={10}>
                                {/* <Grid item>
                                    <img src={loginImage} style={{ height: 200, width: 200 }} />
                                </Grid> */}
                                <h3>Password Check Field</h3>
                                <Grid>
                                    <TextField label="Password" onChange={onPasswordChange} >

                                    </TextField>
                                </Grid>

                                <Grid>
                                    <Button variant="contained"
                                        onClick={() => {
                                            onSubmit()
                                        }}
                                    >
                                        Login
                                    </Button>
                                </Grid>
                                <Grid>
                                    <Stack spacing={1} >

                                        <Grid>
                                            {error === true ?
                                                <Typography sx={{ cursor: 'pointer', color: "blue" }}>
                                                    {viewError}
                                                </Typography>
                                                : ""}
                                        </Grid>
                                        <Grid>
                                            {successResponse === undefined || successResponse === null ? "" :  <Typography sx={{ cursor: 'pointer', color: "blue" }}>
                                                  {successResponse}
                                                </Typography>}
                                        </Grid>
                                    </Stack>
                                </Grid>
                            </Stack>
                        </center>
                    </Card>
                </Grid>

            </Grid>

        </>
    )

}
