import { EMAIL_INPUT, PASSWORD_INPUT } from "./constants";

export interface User {
  email: string;
  password: string;
  id: string;
}
export interface PostUserRes {
  status_code: string;
  newUser?: User;
  error: null | string;
}

export interface SignUpFormInput {
  [EMAIL_INPUT]: string;
  [PASSWORD_INPUT]: string;
}
