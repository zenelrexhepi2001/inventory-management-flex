import * as Yup from "yup";

export const createJobValidationsSchema = Yup.object().shape({
  jobName: Yup.string().required("This field is required!"),
});

export const editJobValidationsSchema = Yup.object().shape({
  quantity: Yup.string().required("This field is required!"),
  notes: Yup.string().notRequired(),
  description: Yup.string().notRequired(),
})