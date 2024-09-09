import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { FC } from "react";
import { IssueIcon } from "../../assets/svg/IssueIcon";
import { Button, CustomInput } from "../common";
import { PlusIcon, SearchIcon } from "../../assets/svg";
import { DataTableSearchProps } from "../../interfaces";

const DataTableSearchWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: "12px",
  paddingLeft: "10px",
  paddingRight: "10px",
});

export const DataTableSearchIssue = styled(Typography)({
  fontsize: "14px",
  color: "#323338",
  display: "flex",
  alignItems: "center",
  gap: 5,
  lineHeight: 0,
});

const SearchInputWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

export const DataTableSearch: FC<DataTableSearchProps> = ({
  searchTitle,
  handleChangeSearchInput,
  handleOpenCreateModal,
}) => {
  return (
    <DataTableSearchWrapper>
      <DataTableSearchIssue>
        <IssueIcon width={20} height={20} />
        Informative piece of text that can be used regarding this modal.
      </DataTableSearchIssue>
      <SearchInputWrapper>
        <CustomInput
          type="text"
          name="search"
          id="search-data"
          value={searchTitle}
          onChange={handleChangeSearchInput}
          disabled={false}
          icon={<SearchIcon />}
          placeholder="Search a driver"
          className="h-32"
        />
        <Button
          type="button"
          title="Create"
          backgroundColor="#71CF48"
          onClick={handleOpenCreateModal}
          icon={<PlusIcon />}
        />
      </SearchInputWrapper>
    </DataTableSearchWrapper>
  );
};
