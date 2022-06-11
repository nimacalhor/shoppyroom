import { User } from "@modules/member/libraries/member-types";
import { hash, compare } from "bcryptjs";

export function validateEmail(email: string) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const hashPassword = async function (pass: string) {
  const hashedPass = await hash(pass, 12);
  return hashedPass;
};

export const getUser = function (
  data: User[],
  option: "id" | "email",
  value: string
) {
  if (option === "email") return data.find((usr) => usr.email === value);
  if (option === "id") return data.find((usr) => usr.id === value);
};

export const userExists = (...args: Parameters<typeof getUser>) =>
  !!getUser(...args);

export const verifyPassword = async (pass: string, hashedPass: string) =>
  await compare(pass, hashedPass);
