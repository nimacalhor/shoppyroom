import DashboardHeader from "../../modules/dashboard/components/dashboard-header";
import DashboardNav from "@modules/dashboard/components/dashboard-nav";
import { User } from "@modules/member/libraries/member-types";
import Loading from "@modules/dashboard/components/loading";
import Wallet from "@modules/dashboard/components/wallet";
import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Session } from "next-auth";

const DashboardLayout = ({ children }: { children: any }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getSession().then((ssn) => {
      if (ssn !== null && !ssn.user) {
        window.location.href = "";
      } else {
        setLoading(false);
        setSession(ssn);
      }
    });
  }, []);
  return (
    <>
      <DashboardHeader />
      {loading && <Loading />}
      {session && !loading && (
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
            <Wallet user={session.user as User} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default DashboardLayout;
