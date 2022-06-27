import DashboardLayout from "@layouts/templates/dashboard-layout";
import React, { ReactElement } from "react";

function DashboardMainPage() {
  return <div>DashboardMainPage</div>;
}

DashboardMainPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardMainPage;
