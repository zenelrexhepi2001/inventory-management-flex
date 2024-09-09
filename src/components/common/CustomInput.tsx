import React, { FC } from "react";
import styled from "@emotion/styled";
import { InputProps } from "../../interfaces";

const Wrapper = styled("div")({
  position: "relative",
  display: "flex",
});

const InputStyles = styled("input")((props) => ({
  backgroundColor: `${props.color ? props.color : "#fff"}`,
  width: `${props.width ? props.width : "492px"}`,
  paddingTop: "7px",
  paddingBottom: "7px",
  display: "flex",
  alignItems: "center",
  paddingLeft: 25,
  position: "relative",
  border: "1px solid #EAEAEA",
  borderRadius: "5px",
}));

const CustomInputIcon = styled("div")({
  position: "absolute",
  zIndex: 50,
  bottom: 2,
  paddingLeft: "5px",
});

export const CustomInput: FC<InputProps> = (props) => {
  const {
    type,
    id,
    name,
    disabled,
    placeholder,
    value,
    className,
    onChange,
    icon,
    width,
    color,
  } = props;
  return (
    <Wrapper>
      <InputStyles
        type={type}
        id={id}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        width={width}
        color={color}
      />
      {icon && <CustomInputIcon>{icon}</CustomInputIcon>}
    </Wrapper>
  );
};
