import DashboardHeader from "../../modules/dashboard/components/dashboard-header";
import DashboardNav from "@modules/dashboard/components/dashboard-nav";
import { User } from "@modules/member/libraries/member-types";
import Wallet from "@modules/dashboard/components/wallet";
import { useSession } from "next-auth/react";
import Grid from "@mui/material/Grid";

const DashboardLayout = ({ children }: { children: any }) => {
  const { data } = useSession();
  return (
    <>
      <DashboardHeader />
      <Grid className="page" spacing={2} container>
        {/* children __________ */}
        <Grid
          order={{
            xs: 2,
            md: 1,
          }}
          item
          xs={12}
          md={7}
          lg={8}
        >
          {children}
        </Grid>
        {/* Nav __________ */}
        <Grid
          order={{
            xs: 1,
            md: 2,
          }}
          item
          xs={12}
          md={5}
          lg={4}
        >
          <DashboardNav />
          {data && <Wallet user={data.user as User} />}
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardLayout;
