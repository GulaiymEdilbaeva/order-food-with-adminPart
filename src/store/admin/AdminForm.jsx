import React, { useState } from "react";
import { MainModal } from "../../components/UI/modal/Modal";
import { postAdminMeals } from "./adminMealsThunk";
import { useDispatch } from "react-redux";
import styled from "styled-components";

export const AdminForm = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    title: "",
    description: "",
    price: "",
  });
  const titleChangeHandler = (e) => {
    setValue({
      ...value,
      title: e.target.value,
    });
  };
  const descriptionChangeHandler = (e) => {
    setValue({
      ...value,
      description: e.target.value,
    });
  };
  const priceChangeHandler = (e) => {
    setValue({
      ...value,
      price: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      title: value.title,
      description: value.description,
      price: +value.price,
    };

    console.log("data: ", data);
    dispatch(postAdminMeals(data));
  };

  return (
    <MainModal open={open} onClose={onClose}>
      <Form onSubmit={submitHandler}>
        <Label>
          title
          <Input
            type="text"
            value={value.title}
            onChange={titleChangeHandler}
          />
        </Label>
        <Label>
          description
          <Input
            type="text"
            value={value.description}
            onChange={descriptionChangeHandler}
          />
        </Label>
        <Label>
          price
          <Input
            type="number"
            value={value.price}
            onChange={priceChangeHandler}
          />
        </Label>
        <SubmitButton type="submit">Add product</SubmitButton>
      </Form>
      <CancelButton onClick={onClose}>Cancel</CancelButton>
    </MainModal>
  );
};
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-left: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #2196f3;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
`;
