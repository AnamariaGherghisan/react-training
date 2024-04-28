import { useState } from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const Login = ({ onSuccess, onFailure }) => {
  const [error, setError] = useState(true);

  const initialValues = {
    email: "",
    password: "",
  };

  const validate = ({ email, password }) => {
    const errors = {};

    if (!email) {
      errors.email = "Please enter a valid email address.";
    }

    if (!password) {
      errors.password = "Please enter a valid password.";
    }

    return errors;
  };

  const onSubmit = ({ email, password }) => {
    if (!email || !password) {
      setError("Please enter an email and password");

      onFailure();
    } else if (email === "bob.smith@email.com" && password === "Password123!") {
      setError("");

      onSuccess();
    } else {
      setError("Invalid credentials, please try again.");

      onFailure();
    }
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  return (
    <Container maxWidth="md">
      <Box component="form" onSubmit={formik.handleSubmit}>
        <Stack gap={3}>
          <TextField
            type="email"
            name="email"
            id="email"
            label="Email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            helperText={formik.touched.email && formik.errors.email}
            error={formik.touched.email && !!formik.errors.email}
          />

          <TextField
            type="password"
            name="password"
            id="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            helperText={formik.touched.password && formik.errors.password}
            error={formik.touched.email && !!formik.errors.password}
          />

          <Button variant="contained" type="submit">
            Login
          </Button>

          {error && (
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" gutterBottom sx={{ color: "red" }}>
                {error}
              </Typography>
            </Box>
          )}
        </Stack>
      </Box>
    </Container>
  );
};