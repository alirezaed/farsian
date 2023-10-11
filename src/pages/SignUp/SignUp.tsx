import { Box, Button, Container, Grid, TextField, styled } from "@mui/material";
import * as React from "react";

const FormContainer = styled("form")(({ theme }) => ({
  margin: "auto",
  marginTop: theme.spacing(2),
  maxWidth: "600px",
}));
export default function SignUp() {
  const [values, setValues] = React.useState<{ [field: string]: string }>({
    fullname: "",
    username: "",
    password: "",
    confirmpassword: "",
    email: "",
  });

  const handleChangeField = (e: any) => {
    setValues((p) => ({ ...p, [e.target.id]: e.target.value }));
  };

  const [errors, setErrors] = React.useState<{ [field: string]: string }>({
    fullname: "",
    username: "",
    password: "",
    confirmpassword: "",
    email: "",
  });

  const handleSignup = (e: any) => {
    e.preventDefault();
    if (!values.fullname || values.fullname.length < 5) {
      setErrors((p) => ({ ...p, fullname: "This field is required." }));
      return;
    } else {
      setErrors((p) => ({ ...p, fullname: "" }));
    }
    console.log(values);
  };

  const fieldProps = (fieldName: string) => ({
    value: values[fieldName],
    onChange: handleChangeField,
    helperText: errors[fieldName],
    error: !!errors[fieldName],
  });

  return (
    <Container>
      <FormContainer>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>Sign Up</h1>
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...fieldProps('fullname')}
              id="fullname"
              fullWidth
              label="Full Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              value={values.email}
              onChange={handleChangeField}
              id="email"
              fullWidth
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={values.username}
              onChange={handleChangeField}
              fullWidth
              id="username"
              label="Username"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={values.password}
              onChange={handleChangeField}
              fullWidth
              id="password"
              label="Password"
              variant="outlined"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={values.confirmpassword}
              onChange={handleChangeField}
              fullWidth
              id="confirmpassword"
              label="Confirm Password"
              variant="outlined"
              type="password"
            />
          </Grid>
          <Grid item>
            <Button type="submit" onClick={handleSignup} variant="outlined">
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </FormContainer>
    </Container>
  );
}
