import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { FC } from "react";
import { CloseIcon, SearchIcon } from "../../assets/svg";
import { CustomInput } from "../common";
import { DataGridProps } from "../../interfaces";

const DataGridWrapper = styled("div")({
  background: "#fff",
  width: "100%",
  height: 500,
  dropShadow: "rgba(0, 0, 0, 0.16)",
  borderRadius: "10px",
});

const DataGridHeader = styled("header")({
  background: "#F8F8FA",
  height: "45px",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: "10px",
  paddingRight: "10px",
});

const CustomTypography = styled(Typography)({
  color: "#323338",
  fontsize: "16px",
  lineHeight: "21.79px",
  flex: 1,
});

const DataGridContent = styled("div")({
  width: "100%",
});

const Flex = styled("div")({
  display: "flex",
  gap: "8px",
});

export const DataGrid: FC<DataGridProps> = ({
  children,
  isOpenTable,
  categoryName,
  isCheckCategory,
  handleCloseTable,
  searchInputValue,
  handleChangeSearchInput,
}) => {
  return (
    <DataGridWrapper>
      <DataGridHeader>
        {isOpenTable ? (
          <CustomTypography variant="h6">{isCheckCategory}</CustomTypography>
        ) : (
          <CustomTypography variant="h6">Data Grid</CustomTypography>
        )}
        {isOpenTable && (
          <Flex>
            <CustomInput
              type="text"
              id="search"
              name="search"
              disabled={false}
              value={searchInputValue}
              onChange={handleChangeSearchInput}
              placeholder="Search a driver"
              icon={<SearchIcon />}
            />
            <Button variant="text" onClick={handleCloseTable}>
              <CloseIcon />
            </Button>
          </Flex>
        )}
      </DataGridHeader>
      <DataGridContent>{children}</DataGridContent>
    </DataGridWrapper>
  );
};
