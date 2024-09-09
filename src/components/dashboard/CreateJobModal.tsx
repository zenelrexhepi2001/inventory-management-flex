import { FC, useState } from "react";
import {
  Button,
  CircleSelect,
  CustomInput,
  CustomModal,
  CustomSelect,
} from "../common";
import styled from "@emotion/styled";
import { Box, Chip, SelectChangeEvent, Stack, Typography } from "@mui/material";
import MuiButton from "@mui/material/Button";
import { CheckIcon, CloseIcon, DownIcon } from "../../assets/svg";
import { DataTableSearchIssue } from "./DataTableSearch";
import { IssueIcon } from "../../assets/svg/IssueIcon";
import { Formik } from "formik";
import { createJobValidationsSchema } from "../../utils/validations";
import { categoryData, StatusData } from "../../__mocks__";
import { EditJobModalProps } from "../../interfaces";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../hooks";
import { createJob } from "../../redux/actions/jobActions";
import { CustomSelectEnum } from "../../enums/components";
import { JobEnum } from "../../enums/jobs";
import { makeStyles } from "@mui/styles";

const CreateJobModalHeader = styled("div")({
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

const CreateJobModalHeaderTitle = styled(Typography)({
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

export const SelectFlex = styled("div")({
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
  paddingTop: "130px",
});

const ErrorMessage = styled(Typography)({
  color: "red",
  fontSize: "14px",
  marginTop: "5px",
});

export const FlexCirclesCategory = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
});

const useStyles = makeStyles(() => ({
  selected1: {
    "&:focus": {
      backgroundColor: "#67AA3C",
      color: "#fff",
    },
  },

  selected2: {
    "&:focus": {
      backgroundColor: "#EFD652",
      color: "#fff",
    },
  },
  selected3: {
    "&:focus": {
      backgroundColor: "#9640BE",
      color: "#fff",
    },
  },
  selectedStatus1: {
    "&:focus": {
      backgroundColor: "#7AC14D",
      color: "#fff",
    },
  },

  selectedStatus2: {
    "&:focus": {
      backgroundColor: "#B3D99B",
      color: "#fff",
    },
  },
  selectedStatus3: {
    "&:focus": {
      backgroundColor: "#ECDE7C",
      color: "#fff",
    },
  },
}));

export const CreateJobModal: FC<EditJobModalProps> = ({
  handleCloseEditJobModal,
}) => {
  const dispatch = useDispatch() as AppDispatch;
  const [isChoseCategory, setIsChoseCategory] = useState<string[]>([]);
  const [isErrorChoseCategory, setIsErrorChoseCategory] =
    useState<boolean>(false);
  const [isChoseStatus, setIsChoseStatus] = useState<string[]>([]);
  const [isErrorChoseStatus, setIsErrorChoseStatus] = useState<boolean>(false);
  const classes = useStyles();

  const handleChoseCategory = (
    event: SelectChangeEvent<typeof isChoseCategory>
  ) => {
    const {
      target: { value },
    } = event;

    setIsChoseCategory(typeof value === "string" ? value?.split(",") : value);
    setIsErrorChoseCategory(false);
  };

  const handleChoseStatus = (
    event: SelectChangeEvent<typeof isChoseCategory>
  ) => {
    const {
      target: { value },
    } = event;

    setIsChoseStatus(typeof value === "string" ? value.split(",") : value);
    setIsErrorChoseStatus(false);
  };

  const handleCreateJob = (jobName: string) => {
    if (isChoseCategory.length > 0 && isChoseStatus.length > 0) {
      dispatch(
        createJob({
          jobName: jobName,
          category: {
            name: isChoseCategory,
            data: [
              {
                nr: 1,
                item: "H3045",
                quantity: 5,
                notes: "test",
                description: "test",
              },
            ],
          },
          statusName: isChoseStatus[0],
        })
      );
      handleCloseEditJobModal();
    } else {
      if (isChoseCategory.length > 0) {
        setIsErrorChoseCategory(false);
      } else {
        setIsErrorChoseCategory(true);
      }
      if (isChoseStatus.length > 0) {
        setIsErrorChoseStatus(false);
      } else {
        setIsErrorChoseStatus(true);
      }
    }
  };

  const handleDeleteSelectCategory = (id: string) => {
    setIsChoseCategory((prev) => {
      return prev.filter((category) => category !== id);
    });
  };

  return (
    <CustomModal handleCloseModal={handleCloseEditJobModal}>
      <CreateJobModalHeader>
        <CreateJobModalHeaderTitle variant="h6">
          Title
        </CreateJobModalHeaderTitle>
        <MuiButton variant="text" onClick={handleCloseEditJobModal}>
          <CloseIcon />
        </MuiButton>
      </CreateJobModalHeader>
      <ModalBody>
        <DataTableSearchIssue>
          <IssueIcon width={20} height={20} />
          Informative piece of text that can be used regarding this modal.
        </DataTableSearchIssue>

        <Formik
          initialValues={{
            jobName: "",
            category: isChoseCategory,
            status: isChoseStatus,
          }}
          validationSchema={createJobValidationsSchema}
          onSubmit={(values) => {
            handleCreateJob(values.jobName);
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
            <ModalForm>
              <ModalInput>
                <ModalLabel>Name</ModalLabel>
                <CustomInput
                  type="text"
                  id="jobName"
                  name="jobName"
                  value={values.jobName}
                  onChange={handleChange}
                  placeholder="Type the jobsite’s name"
                  disabled={false}
                  width="100%"
                  color={"#F5F5F7"}
                />
                {errors.jobName && touched.jobName && (
                  <ErrorMessage>{errors.jobName}</ErrorMessage>
                )}
              </ModalInput>
              <SelectFlex>
                <ModalInput>
                  <ModalLabel>Category included</ModalLabel>
                  <CustomSelect
                    value={isChoseCategory}
                    onChange={handleChoseCategory}
                    data={categoryData}
                    inputLabel=""
                    sx={{ width: "564px" }}
                    multiple={true}
                    placeholder="Select"
                    backgroundColor={[
                      classes.selected1,
                      classes.selected2,
                      classes.selected3,
                    ]}
                    backgroundColorHover={["#67AA3C", "#EFD652", "#9640BE"]}
                    renderValue={(selected: string[]) => {
                      return (
                        <>
                          {selected.length === 0 && (
                            <Typography
                              variant="subtitle2"
                              sx={{ color: "#E0E0E1" }}
                            >
                              Select
                            </Typography>
                          )}
                          <Stack direction="row" spacing={1}>
                            {selected?.map((select) => (
                              <Stack
                                direction="row"
                                alignItems="center"
                                key={"select-category-" + select}
                              >
                                <Box
                                  sx={{
                                    backgroundColor: `${
                                      (select ==
                                        CustomSelectEnum.SIDEWALK_SHEED &&
                                        "#67AA3C") ||
                                      (select == CustomSelectEnum.SCAFFOLD &&
                                        "#EFD652") ||
                                      (select == CustomSelectEnum.SHORING &&
                                        "#9640BE")
                                    }`,
                                    width: "10px",
                                    height: "10px",
                                    borderRadius: "100%",
                                    paddingLeft: 0,
                                  }}
                                />
                                <Chip
                                  key={select}
                                  label={select}
                                  sx={{ backgroundColor: "transparent" }}
                                  onDelete={() =>
                                    handleDeleteSelectCategory(select)
                                  }
                                  deleteIcon={
                                    <Box
                                      sx={{
                                        backgroundColor: "#FE4C4A",
                                        width: "18px",
                                        height: "18px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "2px",
                                      }}
                                      onMouseDown={(event) =>
                                        event.stopPropagation()
                                      }
                                    >
                                      <CloseIcon
                                        color="#fff"
                                        width={10}
                                        height={10}
                                      />
                                    </Box>
                                  }
                                />
                              </Stack>
                            ))}
                          </Stack>
                        </>
                      );
                    }}
                  />
                  {isErrorChoseCategory && (
                    <ErrorMessage>This field is required!</ErrorMessage>
                  )}
                </ModalInput>
                <ModalInput>
                  <ModalLabel>Status</ModalLabel>
                  <CustomSelect
                    value={isChoseStatus}
                    onChange={handleChoseStatus}
                    data={StatusData}
                    inputLabel=""
                    multiple={false}
                    placeholder="Select one"
                    backgroundColor={[
                      classes.selectedStatus1,
                      classes.selectedStatus2,
                      classes.selectedStatus3,
                    ]}
                    backgroundColorHover={["#7AC14D", "#B3D99B", "#ECDE7C"]}
                    renderValue={(selected: string[]) => {
                      return (
                        <>
                          <CircleSelect sx={{ width: "100%" }}>
                            {selected.length === 0 && (
                              <Typography
                                variant="subtitle2"
                                sx={{ color: "#E0E0E1" }}
                              >
                                Select one
                              </Typography>
                            )}
                            {selected?.map((select) => (
                              <FlexCirclesCategory
                                key={"select-status-" + select}
                              >
                                <Box
                                  sx={{
                                    width: "10px",
                                    height: "10px",
                                    borderRadius: "100%",
                                    backgroundColor: `${
                                      (select === JobEnum.COMPLETED &&
                                        "#7AC14D") ||
                                      (select === JobEnum.IN_PROGRESS &&
                                        "#B3D99B") ||
                                      (select === JobEnum.ON_HOLD && "#ECDE7C")
                                    }`,
                                  }}
                                />
                                <Typography variant="subtitle2">
                                  {select}
                                </Typography>
                              </FlexCirclesCategory>
                            ))}
                          </CircleSelect>
                        </>
                      );
                    }}
                  />
                  {isErrorChoseStatus && (
                    <ErrorMessage>This field is required!</ErrorMessage>
                  )}
                </ModalInput>
              </SelectFlex>
              <ModalFooter>
                <Button
                  type="button"
                  title="Cancel Changes"
                  icon={<CloseIcon color="#fff" />}
                  disabled={false}
                  onClick={handleCloseEditJobModal}
                  backgroundColor="#FE4C4A"
                />
                <Button
                  type="submit"
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
