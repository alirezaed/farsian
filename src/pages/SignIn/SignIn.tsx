import { Box, Button, Container, Grid, TextField, styled } from "@mui/material";
import axios from "../../axios";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const FormContainer = styled("form")(({ theme }) => ({
  margin: "auto",
  marginTop: theme.spacing(2),
  maxWidth: "600px",
}));
export default function SignIn() {
  const navigate = useNavigate();

  const [values, setValues] = React.useState<{ [key: string]: string }>({
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setValues((current) => ({ ...current, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post("/users/login", values).then((c) => {
      console.log(c);
      if (c.data.status) {
        localStorage.setItem("token", c.data.message);
      }
    });
  };

  const handleSignup = () => {
    console.log("handle signup");
    navigate("/Signup");
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>Login</h1>
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={values.username}
              onChange={handleChange}
              fullWidth
              id="username"
              label="Username"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              value={values.password}
              onChange={handleChange}
              id="password"
              label="Password"
              variant="outlined"
              type="password"
            />
          </Grid>
          <Grid item>
            <Button type="submit" variant="outlined">
              Login
            </Button>
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
