import { FC } from "react";
import { Link } from "react-router-dom";
import { CustomLinkProps } from "../../interfaces";
import styled from "@emotion/styled";

const CustomLinkStyle = styled(Link)({
  color: "#1264A3",
  fontSize: "14px",
  textDecoration: "none",
});

export const CustomLink: FC<CustomLinkProps> = ({ to, children }) => {
  return <CustomLinkStyle to={to}>{children}</CustomLinkStyle>;
};
