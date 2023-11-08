import { Box, Button, Container, Grid, TextField, styled } from "@mui/material";
import axios from "../../axios";
import * as React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoadingButton } from "@mui/lab";
import ToastMessage from "../../components/ToastMessage/ToastMessage";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../context/ToastContext";

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

interface ServerResult {
  message: string;
  status: boolean;
}
export default function SignUp() {
  const [loading, setLoading] = React.useState(false);
  const { showSuccessMessage, showErrorMessage } = useToast();
  const navigate = useNavigate();
  const schema = yup
    .object({
      email: yup.string().required("This field is required"),
      username: yup.string().required("This field is required"),
      password: yup.string().required("This field is required"),
      confirmpassword: yup
        .string()
        .required("This field is required")
        .oneOf([yup.ref("password")], "Passwords do not match"),
      fullname: yup.string().required("This field is required"),
    })
    .required();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      fullname: "",
    },
    resolver: yupResolver(schema),
  });

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

  const handleSignup: SubmitHandler<Inputs> = (data: any) => {
    // e.preventDefault();
    // if (!values.fullname || values.fullname.length < 5) {
    //   setErrors((p) => ({ ...p, fullname: "This field is required." }));
    //   return;
    // } else {
    //   setErrors((p) => ({ ...p, fullname: "" }));
    // }
    // console.log(data);
    setLoading(true);
    // setServerResult(undefined);
    axios
      .post("/users/signup", {
        username: data.username,
        password: data.password,
        fullname: data.fullname,
        email: data.email,
      })
      .then((c) => {
        console.log(c);

        if (c.data.status) {
          navigate("/");
          showSuccessMessage(c.data.message);
        } else {
          showErrorMessage(c.data.message);
        }
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  };

  // const fieldProps = (fieldName: string) => ({
  //   id: fieldName,
  //   value: values[fieldName],
  //   onChange: handleChangeField,
  //   helperText: errors[fieldName],
  //   error: !!errors[fieldName],
  // });
  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(handleSignup)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>Sign Up</h1>
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="fullname"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  helperText={errors.fullname?.message}
                  error={!!errors.fullname}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  helperText={errors.email?.message}
                  error={!!errors.email}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  helperText={errors.username?.message}
                  error={!!errors.username}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  variant="outlined"
                  helperText={errors.password?.message}
                  error={!!errors.password}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="confirmpassword"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  type="password"
                  label="Confirm Password"
                  variant="outlined"
                  helperText={errors.confirmpassword?.message}
                  error={!!errors.confirmpassword}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item>
            <LoadingButton loading={loading} type="submit" variant="outlined">
              Sign Up
            </LoadingButton>
          </Grid>
        </Grid>
      </FormContainer>
    </Container>
  );
}
