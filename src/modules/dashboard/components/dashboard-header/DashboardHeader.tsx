import useDeviceType from "@modules/general/libraries/device-type";
import CartNotif from "@modules/general/components/cart-notif";
import Logo from "@modules/general/components/logo";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Link from "next/link";

const DashboardHeader = () => {
  const deviceType = useDeviceType();

  return (
    <AppBar sx={{ p: 3, mb: 3 }} position="static">
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Link href="/" passHref>
          <Logo deviceType={deviceType} />
        </Link>
        <CartNotif />
      </Stack>
    </AppBar>
  );
};

export default DashboardHeader;
