import styled from "@emotion/styled";
import { FC } from "react";
import { DataTableProps } from "../../interfaces";
import { DataTableHeader } from "./DataTableHeader";

const Wrapper = styled("div")({
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundColor: "#fff",
});

export const WrapperChildren = styled("div")({
  paddingTop: "14px",
  paddingBottom: "14px",
});

export const DataTable: FC<DataTableProps> = ({ children }) => {
  return (
    <Wrapper>
      <DataTableHeader />
      <WrapperChildren>{children}</WrapperChildren>
    </Wrapper>
  );
};
