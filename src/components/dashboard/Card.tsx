import styled from "@emotion/styled";
import { FC } from "react";
import { DashboardCardProps } from "../../interfaces";
import { Box, Typography } from "@mui/material";

const CustomCard = styled(Box)({
  width: "100%",
  minHeight: "104px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
});

const CustomCardTitle = styled(Typography)({
  color: "#fff",
  fontSize: "30px",
  fontWeight: 500,
  lineHeight: "40.85px",
});

export const Card: FC<DashboardCardProps> = (props) => {
  const { title, backgroundColor } = props;
  return (
    <CustomCard sx={{ backgroundColor: backgroundColor as string }}>
      <CustomCardTitle variant="h6">{title}</CustomCardTitle>
    </CustomCard>
  );
};
