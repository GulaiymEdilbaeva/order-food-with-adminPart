import React, { useEffect } from "react";
import { MainModal } from "../UI/modal/Modal";
import styled from "styled-components";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "../../store/basket/basketThunk";

export const Basket = ({ toggleHandler, open }) => {
  const { items } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);

  const totalPrice = items?.reduce(
    (prev, current) => prev + +current.price.toFixed(2) * current.amount,
    0
  );

  return (
    <MainModal open={open} onClose={toggleHandler}>
      <Content>
        {items?.length ? (
          <FixedWidthContainer>
            {items.map((item) => {
              return (
                <BasketItem
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                />
              );
            })}
          </FixedWidthContainer>
        ) : null}
        <TotalAmount toggleHandler={toggleHandler} totalPrice={totalPrice} />
      </Content>
    </MainModal>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
`;

const FixedWidthContainer = styled.div`
  overflow-y: auto;
  max-height: 260px;
`;
