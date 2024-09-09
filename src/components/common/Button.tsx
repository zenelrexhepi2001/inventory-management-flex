import React, { FC } from "react";
import styled from "@emotion/styled";
import { ButtonProps } from "../../interfaces";
import MuiButton from "@mui/material/Button";

const CustomButton = styled(MuiButton)((props) => ({
  backgroundColor: `${props.style?.backgroundColor || "#1264A3"}`,
  color: "#fff",
  fontSize: "12px",
  fontFamily: "Open Sans",
  fontWeight: "normal",
  lineHeight: "0px",
  textAlign: "center",
  width: "150px",
  height: "32px",
  outline: "none",
  border: "none",
  borderRadius: "5px",
}));

const CustomButtonContent = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flex: 1,
});

const CustomButtonTitle = styled("span")({
  flex: 1,
  lineHeight: 0,
  textTransform: "none",
  height: 0,
});

const CustomButtonIcon = styled("div")({
  paddingLeft: 8,
  paddingRight: 0,
  borderColor: "#000",
  borderLeftWidth: 1,
  borderRight: 0,
  borderTop: 0,
  borderBottom: 0,
  borderStyle: "solid",
  height: "31px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Button: FC<ButtonProps> = (props) => {
  const { type, variant, title, onClick, icon, backgroundColor, disabled } =
    props;
  return (
    <CustomButton
      variant={variant}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ backgroundColor: backgroundColor }}
    >
      <CustomButtonContent>
        <CustomButtonTitle>{title}</CustomButtonTitle>
        {icon && <CustomButtonIcon>{icon}</CustomButtonIcon>}
      </CustomButtonContent>
    </CustomButton>
  );
};
