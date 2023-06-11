import { Box, TextField } from "@mui/material";
import styled from "styled-components";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { USERS_ROLE } from "../constans";
import { useDispatch } from "react-redux";
import { signUpRequest } from "../store/auth/authThunk";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onChangeNameHandler(e) {
    setName(e.target.value);
  }

  function onChangeEmailHandler(e) {
    setEmail(e.target.value);
  }

  function onChangePasswordHandler(e) {
    setPassword(e.target.value);
  }

  function onChangeConfirmPasswordHandler(e) {
    setConfirmPassword(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      role: USERS_ROLE.USER,
    };
    // sigin
    dispatch(signUpRequest(data))
      .unwrap()
      .then(() => navigate("/signin"))
      .catch();
  }
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
            id="outlined-basic"
            variant="outlined"
            label="Name"
            type="text"
            value={name}
            onChange={onChangeNameHandler}
          />
          <TextField
            id="filled-basic"
            variant="filled"
            label="Gmail"
            value={email}
            type="email"
            onChange={onChangeEmailHandler}
          />

          <TextField
            id="filled-basic"
            variant="filled"
            label="Password"
            type="password"
            value={password}
            onChange={onChangePasswordHandler}
          />

          <TextField
            id="filled-basic"
            variant="filled"
            label="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={onChangeConfirmPasswordHandler}
          />
        </Box>
        <Button
          style={{
            backgroundColor: "#A0522D",
            color: "white",
            width: "130px",
          }}
          type="submit"
        >
          Sign Up
        </Button>
        <div>
          You have an account ? <Link to="/signin">sign in</Link>
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
  height: 500px;
`;
