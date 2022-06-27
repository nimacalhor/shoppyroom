import { EMAIL_INPUT, PASSWORD_INPUT } from "./constants";
import * as yup from "yup";

export const signupSchema = yup.object().shape({
  [EMAIL_INPUT]: yup.string().email().required(),
  [PASSWORD_INPUT]: yup.string().min(7).max(20).required(),
});
