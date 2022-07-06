import Offerings from "@modules/page-sections/components/offerings";
import DashboardLayout from "@layouts/templates/dashboard-layout";
import Chart from "@modules/cart/components/chart";
import React, { ReactElement } from "react";
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

export default DashboardMainPage;
