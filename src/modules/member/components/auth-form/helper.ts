import { EMAIL_INPUT, PASSWORD_INPUT } from "../../libraries/constants";
import { TOAST_OPTIONS } from "@modules/general/libraries/constants";
import { NextRouter } from "next/router";
import { toast } from "react-toastify";

export const toastError = (txt: string) => toast.error(txt, TOAST_OPTIONS);
export const toastSuccess = (txt: string) => toast.success(txt, TOAST_OPTIONS);

export const redirectUser = function (
  router: NextRouter,
  path: string = "/dashboard"
): Promise<boolean> {
  return new Promise((resolve) =>
    setTimeout(() => {
      router.push(path);
      resolve(true);
    }, 3000)
  );
};
