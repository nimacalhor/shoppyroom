import { User, PostUserRes } from "@modules/member/libraries/member-types";
import axios, { AxiosResponse } from "axios";

export const postNewUser = async function (user: User): Promise<PostUserRes> {
  try {
    const response = await axios.post("/api/auth/signup", user);
    if (response.data) return response.data;
    console.log(response);
  } catch (err: any) {
    console.log("catch block")
    return {
      error: err.message,
      status_code: "404",
    };
  }
  return {
    error: "something went wrong",
    status_code: "404",
  };
};
