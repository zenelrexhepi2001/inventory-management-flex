import React, { FC } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Button } from "./Button";
import { CheckIcon, RightIcon } from "../../assets/svg";
import { SidebarProps } from "../../interfaces";

const SidebarWrapper = styled("aside")({
  backgroundColor: "#fff",
  width: "347px",
  borderRadius: "10px",
  dropShadow: "rgba(0, 0, 0, 0.16)",
});

const SidebarHeader = styled("div")({
  backgroundColor: "rgba(248, 248, 250, 1)",
  borderRadius: "10px 10px 0px 0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  height: "45px",
  paddingLeft: "12px",
  paddingRight: "12px",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
});

const CustomTypography = styled(Typography)({
  color: "#323338",
  fontSize: "16px",
  lineHeight: "21.79px",
});

const CustomTypographyBox = styled(Typography)({
  textAlign: "center",
  flex: 1,
  fontSize: "16px",
  lineHeight: "21.79px",
});

const SidebarBody = styled("div")({
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  gap: 8,
  height: "200px",
  overflowX: "scroll",
});

const SidebarItem = styled("div")((props) => ({
  backgroundColor: `${props.color && props.color}`,
  height: "32px",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: "8px",
  paddingRight: "8px",
  cursor: "pointer",
}));

const CenterButton = styled("div")({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  paddingTop: "100px",
  paddingBottom: "20px",
  height: "25%",
  flex: 1,
});

export const Sidebar: FC<SidebarProps> = ({
  job,
  jobName,
  isCheckCategory,
  handleCheckCategory,
  handleBackToDashboard,
}) => {
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <CustomTypography variant="h6">{jobName}</CustomTypography>
      </SidebarHeader>
      <SidebarBody>
        {job?.map((result: any) => (
          <SidebarItem
            key={"sidebar-category-" + result}
            color={`${isCheckCategory == result ? "#67AA3C" : "#F8F8FA"}`}
          >
            <CustomTypographyBox
              variant="h6"
              sx={
                isCheckCategory === result
                  ? { color: "#fff" }
                  : { color: "#000000" }
              }
              onClick={() => handleCheckCategory(result)}
            >
              {result}
            </CustomTypographyBox>
            {isCheckCategory == result && <CheckIcon />}
          </SidebarItem>
        ))}
      </SidebarBody>
      <CenterButton>
        <Button
          type="button"
          title="Go Back"
          onClick={handleBackToDashboard}
          icon={<RightIcon />}
          disabled={false}
        />
      </CenterButton>
    </SidebarWrapper>
  );
};
