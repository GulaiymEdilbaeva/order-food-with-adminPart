import { Box, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signInRequest } from "../store/auth/authThunk";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const onChangeEmailHandler = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const onChangePasswordHandler = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      email,
      password,
    };

    dispatch(signInRequest(data))
      .unwrap()
      .then(() => navigate("/"))
      .catch((e) => {
        setError(e.response.data.message);
      });
  };

  const isEmailValid = () => {
    return email.length === 0 || (email.length > 0 && email.includes("@"));
  };

  const isPasswordValid = () => {
    return (
      password.length === 0 || (password.length > 0 && password.length >= 4)
    );
  };
  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            display: "flex",
            flexDirection: "column",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            error={!isEmailValid()}
            id="outlined-basic"
            variant="outlined"
            label="Email"
            type="email"
            value={email}
            onChange={onChangeEmailHandler}
          />
          <TextField
            error={!isPasswordValid()}
            id="filled-basic"
            variant="filled"
            label="Password"
            type="password"
            value={password}
            onChange={onChangePasswordHandler}
          />
          {error && (
            <Typography
              textAlign="center"
              sx={{ color: (theme) => theme.palette.error.main }}
            >
              {error}
            </Typography>
          )}
        </Box>
        <Button
          style={{
            backgroundColor: "#A0522D",
            color: "white",
            width: "130px",
          }}
          type="submmit"
        >
          Sign in
        </Button>
        <div>
          Don't have an account? <Link to="/signup">sign up</Link>
        </div>
      </Form>
    </div>
  );
};

const Form = styled.form`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  margin: 0 auto;
  width: 500px;
  background-color: #fff;
  height: 300px;
`;
