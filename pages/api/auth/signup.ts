import { validateEmail, hashPassword } from "@modules/member/libraries/helper";
import { User } from "@modules/member/libraries/member-types";
import { nimLog } from "@modules/general/libraries/helpers";
import { NextApiHandler } from "next";
import * as fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data/dev-data/users.json");

const handler: NextApiHandler = async function (req, res) {
  const data: User[] = JSON.parse(
    fs.readFileSync(filePath, { encoding: "utf-8" })
  );
  const email = req.body.email,
    password = req.body.password;
  if (
    !email ||
    !validateEmail(email) ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      status_code: "422",
      error: "email or password is not valid",
    });
    return;
  }

  if (data.find((usr) => usr.email === email)) {
    res.status(422).json({
      status_code: "422",
      error: "user already exists",
    });
    return;
  }

  if (data.length > 10)
    res.status(442).json({
      status_code: "422",
      error: "we cant accept more users",
    });

  const newUser = {
    email,
    password: await hashPassword(password),
  };

  const newUserArr = [...data, newUser];

  fs.writeFileSync(filePath, JSON.stringify(newUserArr), { encoding: "utf-8" });
  res.status(422).json({
    status_code: "202",
    newUser,
    error: null,
  });
};

export default handler;
