import * as yup from "yup";

export const ValidationSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required(),
  password: yup
    .string()
    .required(),
});
