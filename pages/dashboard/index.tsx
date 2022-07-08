import Offerings from "@modules/page-sections/components/offerings";
import DashboardLayout from "@layouts/templates/dashboard-layout";
import Chart from "@modules/cart/components/chart";
import { getSession } from "next-auth/react";
import React, { ReactElement } from "react";
import { GetServerSideProps } from "next";
import Stack from "@mui/material/Stack";

function DashboardMainPage() {
  return (
    <Stack>
      <Chart />
      <Offerings applyPadding={false} gridSx={{ mt: 1 }} />
    </Stack>
  );
}

DashboardMainPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getServerSideProps: GetServerSideProps = async function (context) {
  const session = await getSession({
    req: context.req,
  });
  if (session && !session.user)
    return {
      redirect: {
        destination: "/member/auth",
        permanent:false
      },
    };
  return{
    props:{}
  }
};

export default DashboardMainPage;
