import styled from "@emotion/styled";
import { FC } from "react";
import { StatusButtonProps } from "../../interfaces";

const StatusButtonCustom = styled("button")((props) => ({
  backgroundColor: `${props.color}`,
  width: "129px",
  height: "32px",
  color: "#fff",
  fontSize: "14px",
  border: "none",
  borderRadius: "8px",
  outline: "none",
}));

export const StatusButton: FC<StatusButtonProps> = ({ title, color }) => {
  return (
    <StatusButtonCustom type="button" color={color}>
      {title}
    </StatusButtonCustom>
  );
};
