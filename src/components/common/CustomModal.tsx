import React, { FC } from "react";
import { Fade, Modal } from "@mui/material";
import { CustomModalProps } from "../../interfaces";
import styled from "@emotion/styled";

const Wrapper = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  outline: "none",
  border: "none",
});

const CustomModalWrapper = styled("div")({
  backgroundColor: "#fff",
  width: "868px",
  position: "relative",
  borderRadius: "10px",
  boxShadow: "#00000029",
});

const CustomModalBody = styled("div")({
  width: "100%",
});

export const CustomModal: FC<CustomModalProps> = ({
  children,
  handleCloseModal,
}) => {
  return (
    <Wrapper open={true} onClose={handleCloseModal}>
      <Fade in={true}>
        <CustomModalWrapper>
          <CustomModalBody>{children}</CustomModalBody>
        </CustomModalWrapper>
      </Fade>
    </Wrapper>
  );
};
