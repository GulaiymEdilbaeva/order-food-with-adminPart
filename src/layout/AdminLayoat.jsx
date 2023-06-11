import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Button } from "../components/UI/button/Button";
import { useDispatch } from "react-redux";
import { authAction } from "../store/auth/authSlice";
import { getFoods } from "../store/meals/mealsThunk";

export const AdminLayoat = () => {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(authAction.logout());
  };
  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);
  return (
    // <div>
    //   <Header>
    //     <h1>Meals</h1>
    //     <Button onClick={logOutHandler}>Sign Out</Button>
    //   </Header>
    //   <main>
    //     <Outlet />
    //   </main>
    // </div>
    <div>
      <HeaderStyle>
        <Ul>
          <li>
            <h1>Meals</h1>
          </li>
          <li>
            <Button
              fontSize="1.2rem"
              bgColor="#5a1f08"
              padding="10px 20px"
              borderradius="6px"
              hvBgColor="#4d1601"
              onClick={logOutHandler}
            >
              Log Out
            </Button>
          </li>
        </Ul>
      </HeaderStyle>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

// const Header = styled("div")`
//   width: 100%;
//   height: 100px;
//   background-color: #8a2b06;
// `;

const HeaderStyle = styled("header")`
  width: 100%;
  height: 101px;
  background-color: #8a2b06;
  padding: 22px 120px;
  color: #ffffff;
`;

const Ul = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;

  list-style: none;
  font-size: 1.4rem;
`;
