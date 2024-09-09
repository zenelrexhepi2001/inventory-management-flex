import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { FC } from "react";

const Header = styled("div")({
  backgroundColor: "#F8F8FA",
  height: "45px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "8px",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
});

const HeaderTitle = styled(Typography)({
  color: "#323338",
  fontsize: "16px",
  fontWeight: "500",
});

export const DataTableHeader: FC = () => {
  return (
    <Header>
      <HeaderTitle>Title</HeaderTitle>
    </Header>
  );
};
