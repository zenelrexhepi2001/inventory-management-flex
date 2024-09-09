import { FC } from "react";
import { ContainerProps } from "../../interfaces";
import styled from "@emotion/styled";

const CustomContainer = styled("main")({
  maxWidth: "1920px",
  margin: "auto",
  paddingLeft: "8px",
  paddingRight: "8px",
});

export const Container: FC<ContainerProps> = ({ children }) => {
  return <CustomContainer>{children}</CustomContainer>;
};
