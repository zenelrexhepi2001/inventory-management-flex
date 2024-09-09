import { FC, useEffect, useState } from "react";
import { Button, CustomInput, CustomModal, CustomSelect } from "../common";
import styled from "@emotion/styled";
import { SelectChangeEvent, Typography } from "@mui/material";
import MuiButton from "@mui/material/Button";
import { CheckIcon, CloseIcon } from "../../assets/svg";
import { DataTableSearchIssue } from "./DataTableSearch";
import { IssueIcon } from "../../assets/svg/IssueIcon";
import { Formik } from "formik";
import { editJobValidationsSchema } from "../../utils/validations";
import { ItemData } from "../../__mocks__";
import { InventoryEditModalProps, Job } from "../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { AppDispatch } from "../../hooks";
import {
  fetchSingleJob,
  updateSingleJob,
} from "../../redux/actions/jobActions";

const EditJobModalHeader = styled("div")({
  backgroundColor: "#F8F8FA",
  height: "45px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "10px",
  paddingRight: "10px",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
});

const EditJobModalHeaderTitle = styled(Typography)({
  fontSize: "16px",
  color: "#323338",
});

const ModalBody = styled("div")({
  paddingTop: "14px",
  paddingLeft: "14px",
  paddingRight: "14px",
  paddingBottom: "20px",
});

const ModalForm = styled("div")({
  paddingTop: "16px",
});

const ModalInput = styled("div")({
  flex: 1,
});

const ModalLabel = styled(Typography)({
  color: "#323338",
  fontsize: "16px",
  paddingLeft: "14px",
  marginBottom: "5px",
});

const SelectFlex = styled("div")({
  display: "flex",
  gap: "5px",
  paddingTop: "12px",
});

const ModalFooter = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
  gap: "10px",
  paddingTop: "20px",
});

const ErrorMessage = styled(Typography)({
  color: "red",
  fontSize: "14px",
  marginTop: "5px",
});

const TextareaInputStyled = styled("textarea")({
  width: "828px",
  height: "114px",
  border: "none",
  borderRadius: "5px",
  background: "#F5F5F7",
  fontsize: "14px",
  outline: "none",
  padding: 10,
  resize: "none",
});

export const EditJobModal: FC<InventoryEditModalProps> = ({
  handleCloseEditJobModal,
  id,
  data,
}) => {
  const [isChoseCategory, setIsChoseCategory] = useState<string[]>([]);
  const { jobDetails } = useSelector((state: RootState) => state.job);
  const dispatch = useDispatch() as AppDispatch;

  const dataJobDetails = jobDetails?.category?.data.find((item) => {
    return item;
  });

  const handleChoseCategory = (
    event: SelectChangeEvent<typeof isChoseCategory>
  ) => {
    const {
      target: { value },
    } = event;

    setIsChoseCategory(typeof value === "string" ? value.split(",") : value);
  };

  const handleEditCategory = (values: {
    quantity: number;
    description: string;
    notes: string;
  }) => {
    dispatch(
      updateSingleJob({
        id: `${jobDetails?.id}`,
        jobName: jobDetails.jobName,
        category: {
          name: jobDetails?.category?.name,
          data: [
            {
              item:
                isChoseCategory.length > 0
                  ? isChoseCategory
                  : jobDetails?.category?.data.map((result) => {return result?.item}),
              quantity: values.quantity,
              description: values.description,
              notes: values.notes,
            },
          ],
        } as any,
        statusName: jobDetails.statusName,
      })
    );
    window.location.reload();
    return dispatch(fetchSingleJob(jobDetails?.id as string));
  };

  return (
    <CustomModal handleCloseModal={handleCloseEditJobModal}>
      <EditJobModalHeader>
        <EditJobModalHeaderTitle variant="h6">
          {jobDetails?.jobName}
        </EditJobModalHeaderTitle>
        <MuiButton variant="text" onClick={handleCloseEditJobModal}>
          <CloseIcon />
        </MuiButton>
      </EditJobModalHeader>
      <ModalBody>
        <DataTableSearchIssue>
          <IssueIcon width={20} height={20} />
          Informative piece of text that can be used regarding this modal.
        </DataTableSearchIssue>

        <Formik
          initialValues={{
            quantity: dataJobDetails?.quantity,
            description: dataJobDetails?.description,
            notes: dataJobDetails?.notes,
          }}
          validationSchema={editJobValidationsSchema}
          onSubmit={(values) => {
            handleEditCategory({
              quantity: values.quantity as any,
              description: values.description as string,
              notes: values.notes as string,
            });
           handleCloseEditJobModal();
          }}
        >
          {({ handleSubmit, handleChange, values }) => (
            <ModalForm>
              <SelectFlex>
                <ModalInput>
                  <ModalLabel>Item</ModalLabel>
                  <CustomSelect
                    value={isChoseCategory}
                    onChange={handleChoseCategory}
                    data={ItemData}
                    inputLabel=""
                    sx={{ width: "409px", paddingTop: "5px" }}
                    placeholder="Select"
                    renderValue={(selected: string[]) => {
                      if (selected.length === 0) {
                        return jobDetails?.category?.data?.map((result) => {
                          return result?.item;
                        });
                      }
                      return selected?.join(", ");
                    }}
                    multiple={false}
                  />
                </ModalInput>
                <ModalInput>
                  <ModalLabel>Quantity</ModalLabel>
                  <CustomInput
                    type="number"
                    id="quantity"
                    name="quantity"
                    placeholder=""
                    value={values.quantity as any}
                    onChange={handleChange}
                    disabled={false}
                    width="400px"
                    color="#F5F5F7"
                  />
                </ModalInput>
              </SelectFlex>
              <ModalInput>
                <ModalLabel>Description</ModalLabel>
                <TextareaInputStyled
                  placeholder="Type the Description"
                  id="description"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                />
              </ModalInput>
              <ModalInput>
                <ModalLabel>Notes</ModalLabel>
                <TextareaInputStyled
                  placeholder="Type the Notes"
                  id="notes"
                  name="notes"
                  value={values.notes}
                  onChange={handleChange}
                />
              </ModalInput>
              <ModalFooter>
                <Button
                  type="button"
                  title="Save Changes"
                  icon={<CheckIcon />}
                  disabled={false}
                  backgroundColor="#71CF48"
                  onClick={handleSubmit}
                />
              </ModalFooter>
            </ModalForm>
          )}
        </Formik>
      </ModalBody>
    </CustomModal>
  );
};
