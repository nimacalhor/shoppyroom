import SignUpForm from "@modules/member/components/auth-form";
import AuthLayout from "@layouts/templates/auth-layout";
import { NextPageWithLayout } from "@pages/_app";
import { ReactElement } from "react";

const SignUpPage: NextPageWithLayout = () => {
  return <SignUpForm />;
};

SignUpPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default SignUpPage;
