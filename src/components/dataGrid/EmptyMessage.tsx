import { FC } from "react";
import styled from "@emotion/styled";
import { PackageIcon } from "../../assets/svg";
import { Typography } from "@mui/material";

const EmptyMessageWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "100px",
});

const EmptyMessageTitle = styled(Typography)({
  color: "#000000",
  fontsize: "16px",
  fontWeight: "500",
  lineHeight: "21.79px",
  marginBottom: "13px",
  paddingTop: "8px",
});

const EmptyMessageSubTitle = styled(Typography)({
  fontsize: 14,
  color: "#666",
  lineHeight: 0,
  fontWeight: "400",
});

export const EmptyMessage: FC = () => {
  return (
    <EmptyMessageWrapper>
      <PackageIcon />
      <EmptyMessageTitle variant="h6">No service selected</EmptyMessageTitle>
      <EmptyMessageSubTitle variant="subtitle2">
        Please selected a service on your left to procced.
      </EmptyMessageSubTitle>
    </EmptyMessageWrapper>
  );
};
