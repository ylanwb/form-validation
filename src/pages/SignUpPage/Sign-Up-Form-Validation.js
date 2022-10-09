import * as yup from "yup";

export const ValidationSchema = yup.object().shape({
  name: yup.string().min(4, "Name must be more than 4 letters").required(),
  email: yup.string().email("Invalid Email").required(),
  age: yup
    .number()
    .min(18, "You must be 18+ to sign up")
    .typeError("Age is required")
    .required(),
  dob: yup
    .date()
    .test("DOB", "Date of Birth should be after 2004", (value) => {
      const newDate = String(value);
      const newerDate = newDate.substr(11, 4);
      return Number(newerDate) < 2004;
    })
    .required(),
  password: yup
    .string()
    .min(8, "Password must be more than 8 letters")
    .required(),
  confirmPassword: yup
    .string()
    .min(8, "Password must be more than 8 letters")
    .required(),
});
