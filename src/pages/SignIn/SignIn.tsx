import { Box, Button, Container, Grid, TextField, styled } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const FormContainer = styled("form")(({ theme }) => ({
  margin: "auto",
  marginTop: theme.spacing(2),
  maxWidth: "600px",
}));
export default function SignIn() {
  const navigate = useNavigate();

  const handleSignup = () => {
    console.log("handle signup");
    navigate("/Signup");
  };

  return (
    <Container>
      <FormContainer>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>Login</h1>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
            />
          </Grid>
          <Grid item>
            <Button variant="outlined">Login</Button>
            Dont have user?{" "}
            <Button type="button" onClick={handleSignup}>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </FormContainer>
    </Container>
  );
}
