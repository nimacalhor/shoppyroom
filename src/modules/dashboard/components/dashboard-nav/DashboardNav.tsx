import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { User } from "@modules/member/libraries/member-types";
import DashboardNavItem from "../dashboard-nav-item";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import { useSession } from "next-auth/react";
import Divider from "@mui/material/Divider";
import { useRouter } from "next/router";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import UserInfo from "../user-info";
import Link from "next/link";

function DashboardNav() {
  const { data } = useSession();
  console.log(data);
  const router = useRouter();
  const homeActive = router.pathname === "/dashboard";
  const cartActive = router.pathname === "/dashboard/cart";
  return (
    <Paper
      className="panel"
      sx={{
        boxShadow: {
          xs: "none",
          md: 2,
        },
        P: 2,
      }}
    >
      {data && data.user && <UserInfo user={data.user as User} />}
      <Divider variant="middle" />
      <Stack sx={{ mx: "auto", pl: 2, py: 2 }} spacing={2}>
        <Link href="/dashboard" passHref>
          <DashboardNavItem endIcon={<HomeIcon />} active={homeActive}>
            home
          </DashboardNavItem>
        </Link>
        <Link href="/dashboard/cart" passHref>
          <DashboardNavItem endIcon={<ShoppingCartIcon />} active={cartActive}>
            cart
          </DashboardNavItem>
        </Link>
        <DashboardNavItem endIcon={<LogoutIcon />} active={false}>
          log out
        </DashboardNavItem>
      </Stack>
    </Paper>
  );
}

export default DashboardNav;
