import { DeviceType } from "@modules/general/libraries/device-type";
import CartNotif from "@modules/general/components/cart-notif";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import stl from "./HeaderActions.module.scss";
import { useSession } from "next-auth/react";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Link from "next/link";

const Actions = ({
  deviceType,
  login,
}: {
  deviceType: DeviceType;
  login: boolean;
}) => {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div className={stl.root}>
      <CartNotif />
      <Divider orientation="vertical" variant="middle" flexItem />
      <>
        {deviceType.isMobileOrTablet ? (
          <Link href={session?.user ? "/dashboard" : "/member/auth"} passHref>
            <IconButton>
              <PersonIcon />
            </IconButton>
          </Link>
        ) : (
          <Link href={session?.user ? "/dashboard" : "/member/auth"} passHref>
            <Button
              className={stl.root__button}
              variant="outlined"
              endIcon={<PersonIcon />}
            >
              {session?.user ? "profile" : "log in / sign up"}
            </Button>
          </Link>
        )}
      </>
    </div>
  );
};

export default Actions;
