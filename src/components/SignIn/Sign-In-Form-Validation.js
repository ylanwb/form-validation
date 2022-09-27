import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required(),
  password: yup
    .string()
    .min(8, "Password must be more than 8 letters")
    .required(),
});
