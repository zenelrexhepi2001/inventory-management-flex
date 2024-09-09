import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FC } from "react";
import { CustomLink } from "../common";
import { StatusButton } from "./StatusButton";
import { Job, TableJobsProps } from "../../interfaces";
import { Typography } from "@mui/material";

const TableContainerCustom = styled("div")({
  backgroundColor: "transparent",
  paddingTop: "20px",
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: 0,
    height: "40px",
    marginBottom: "5px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f2f2f2",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CustomTableCellHeader = styled(TableCell)({
  color: "#323338",
  fontsize: "16px",
});

const EmptyMessage = styled("div")({
  paddingTop: "170px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
});

const EmptyMessageTypographyStyled = styled(Typography)({
  textAlign: "center",
  fontSize: 20,
});

export const TableJobs: FC<TableJobsProps> = ({ jobs, handleGetJobStatus }) => {
  return (
    <TableContainerCustom>
      <Table>
        <TableHead>
          <CustomTableCellHeader align="center">
            Jobsite Name
          </CustomTableCellHeader>
          <CustomTableCellHeader align="center">Status</CustomTableCellHeader>
        </TableHead>
        {jobs?.length > 0 ? (
          <TableBody>
            {jobs.map((result: Job) => (
              <StyledTableRow key={result?.jobName}>
                <StyledTableCell component="th" scope="row" align="center">
                  <CustomLink to={`/inventory/${result?.id}`}>
                    {result?.jobName}
                  </CustomLink>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <StatusButton
                    title={result.statusName}
                    color={`${handleGetJobStatus(result?.statusName)}`}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        ) : (
          <EmptyMessage>
            <EmptyMessageTypographyStyled variant="h5">
              No Jobs!
            </EmptyMessageTypographyStyled>
          </EmptyMessage>
        )}
      </Table>
    </TableContainerCustom>
  );
};
