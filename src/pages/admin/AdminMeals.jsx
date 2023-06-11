import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../store/meals/mealsThunk";
import { AdminForm } from "../../store/admin/AdminForm";
import { Button } from "../../components/UI/button/Button";
import { Button as MiuButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { deleteMeal } from "../../store/admin/adminMealsThunk";

export const AdminMeals = () => {
  const { meals } = useSelector((state) => state.meals);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);

  const modalHandler = () => {
    setModal((prev) => !prev);
  };

  const deleteMealHandler = (id) => {
    dispatch(deleteMeal(id));
  };

  return (
    <MealList>
      <Button
        // fontSize="1rem"
        bgColor="#5a1f08"
        borderradius="6px"
        hvBgColor="#4d1601"
        onClick={modalHandler}
      >
        Add new product
      </Button>

      {modal ? <AdminForm open={modal} onClose={modalHandler} /> : null}

      {meals.map((item) => (
        <ListItem key={item._id}>
          <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
          <div>
            <span>$ {item.price}</span>

            {/* <Button variant="outlined" onClick={() => onEdit(item._id)}>
              Edit
            </Button> */}

            <MiuButton onClick={() => deleteMealHandler(item._id)}>
              Delete
            </MiuButton>
          </div>
        </ListItem>
      ))}
    </MealList>
  );
};

const MealList = styled("ul")`
  width: 70%;
  margin: 0 auto;
  margin-top: 1rem;

  background-color: #ebebeb;
  border-radius: 20px;
  list-style: none;
  margin-bottom: 2rem;
`;
const ListItem = styled("li")`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
  border-bottom: 1px solid;
  h2 {
    font-size: 20px;
  }
  p {
    max-width: 300px;
  }
  span {
    font-size: 20px;
    font-weight: 700;
    margin-right: 40px;
  }
`;
