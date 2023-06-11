import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import { useCallback, useState } from "react";
import { Basket } from "../components/basket/Basket";

export const UserLayout = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return (
    <>
      <Header toggleHandler={toggleHandler} />

      {toggle && <Basket toggleHandler={toggleHandler} open={toggle} />}
      <div style={{ marginTop: "150px" }}>
        <Outlet />
      </div>
    </>
  );
};
