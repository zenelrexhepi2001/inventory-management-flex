import { FC } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableBody } from "@mui/material";
import { InventoryTableProps, Job } from "../../interfaces";
import { EditJobModal } from "../dashboard";

const TableContainerCustom = styled("div")({
  backgroundColor: "transparent",
  borderBottom: "none",
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#000",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: 0,
    height: "40px",
    marginBottom: "5px",
    paddingLeft: "20px",
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

export const InventoryTable: FC<InventoryTableProps> = ({
  categoryData,
  handleOpenEditCategory,
  isOpenUpdateModal,
  setIsOpenUpdateModal,
  id,
}) => {
  const dataCategories: Job[] = [categoryData];
  const handleCloseModal = () => {
    setIsOpenUpdateModal(0);
  };

  return (
    <TableContainerCustom>
      <Table sx={{ width: "100%" }}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Nr.</StyledTableCell>
            <StyledTableCell align="left">Item</StyledTableCell>
            <StyledTableCell align="left">Quantity</StyledTableCell>
            <StyledTableCell align="left">Description</StyledTableCell>
            <StyledTableCell align="left">Notes</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categoryData?.category?.data?.map((data) => (
            <StyledTableRow
              key={"inventory-category-" + data?.nr}
              onMouseDown={() => handleOpenEditCategory(data?.nr as number)}
            >
              <StyledTableCell component="th" scope="row" align="left">
                {categoryData?.category?.data?.length}
              </StyledTableCell>

              <StyledTableCell align="left">{data?.item}</StyledTableCell>
              <StyledTableCell align="left">{data?.quantity}</StyledTableCell>
              <StyledTableCell align="left">
                {data?.description}
              </StyledTableCell>
              <StyledTableCell align="left">{data?.notes}</StyledTableCell>
              {isOpenUpdateModal == data?.nr && (
                <EditJobModal
                  data={categoryData}
                  id={id}
                  handleCloseEditJobModal={handleCloseModal}
                />
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainerCustom>
  );
};
