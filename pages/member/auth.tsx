import SignUpForm from "@modules/member/components/auth-form";
import AuthLayout from "@layouts/templates/auth-layout";
import { NextPageWithLayout } from "@pages/_app";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { ReactElement } from "react";

const SignUpPage: NextPageWithLayout = () => {
  return <SignUpForm />;
};

SignUpPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export const getServerSideProps: GetServerSideProps = async function (context) {
  const session = await getSession({
    req: context.req,
  });
  if (session && session.user)
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  return {
    props: {},
  };
};

export default SignUpPage;
