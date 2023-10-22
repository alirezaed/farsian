import { Box, Button, Container, Grid, TextField, styled } from "@mui/material";
import axios from "../../axios";
import * as React from "react";
import { useForm } from "react-hook-form";

const FormContainer = styled("form")(({ theme }) => ({
  margin: "auto",
  marginTop: theme.spacing(2),
  maxWidth: "600px",
}));

interface Inputs {
  email: string;
  username: string;
  password: string;
  confirmpassword: string;
  fullname: string;
}
export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  // const [values, setValues] = React.useState<{ [field: string]: string }>({
  //   fullname: "",
  //   username: "",
  //   password: "",
  //   confirmpassword: "",
  //   email: "",
  // });

  // const handleChangeField = (e: any) => {
  //   setValues((p) => ({ ...p, [e.target.id]: e.target.value }));
  // };

  // const [errors, setErrors] = React.useState<{ [field: string]: string }>({
  //   fullname: "",
  //   username: "",
  //   password: "",
  //   confirmpassword: "",
  //   email: "",
  // });

  const handleSignup = (data: any) => {
    // e.preventDefault();
    // if (!values.fullname || values.fullname.length < 5) {
    //   setErrors((p) => ({ ...p, fullname: "This field is required." }));
    //   return;
    // } else {
    //   setErrors((p) => ({ ...p, fullname: "" }));
    // }
    console.log(data);
    axios
      .post("/users/signup", {
        username: data.username,
        password: data.password,
        fullname: data.fullname,
        email: data.email,
      })
      .then((c) => console.log(c))
      .catch((e) => console.error(e));
  };

  // const fieldProps = (fieldName: string) => ({
  //   id: fieldName,
  //   value: values[fieldName],
  //   onChange: handleChangeField,
  //   helperText: errors[fieldName],
  //   error: !!errors[fieldName],
  // });
  console.log(errors);
  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(handleSignup)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>Sign Up</h1>
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("fullname", { required: true })}
              fullWidth
              label="Full Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("email")}
              type="email"
              fullWidth
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("username")}
              fullWidth
              autoComplete="asd"
              label="Username"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("password")}
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("confirmpassword")}
              fullWidth
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
