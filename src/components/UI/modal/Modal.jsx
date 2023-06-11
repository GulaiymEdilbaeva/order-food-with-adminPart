import React from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import styled from "styled-components";

export const MainModal = ({ children, onClose, open }) => {
  return (
    <>
      <Modal onClose={onClose} open={open}>
        <ModalStyle>{children}</ModalStyle>
      </Modal>
    </>
  );
};

const ModalStyle = styled(Box)`
  position: fixed;
  top: 22vh;
  left: 4%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  width: 42rem;
  left: calc(50% - 20rem);

  z-index: 999;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-4rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
