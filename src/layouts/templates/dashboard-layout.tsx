import DashboardHeader from "../../modules/dashboard/components/dashboard-header";
import DashboardNav from "@modules/dashboard/components/dashboard-nav";
import stl from "./Dashboard.module.scss";
import Grid from "@mui/material/Grid";

const DashboardLayout = ({ children }: { children: any }) => {
  return (
    <>
      <DashboardHeader />
      <Grid className="page" spacing={2} container>
        <Grid item xs={12} md={7} lg={8}>
          {children}
        </Grid>
        <Grid item md={5} lg={4}>
          <DashboardNav />
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardLayout;
