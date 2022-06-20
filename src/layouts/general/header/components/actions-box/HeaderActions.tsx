import { DeviceType } from "@modules/general/libraries/device-type";
import CartNotif from "@modules/general/components/cart-notif";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import stl from "./HeaderActions.module.scss";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

const Actions = ({
  deviceType,
  login,
}: {
  deviceType: DeviceType;
  login: boolean;
}) => {
  return (
    <div className={stl.root}>
      <CartNotif/>
      <Divider orientation="vertical" variant="middle" flexItem />
      {deviceType.isMobileOrTablet ? (
        <IconButton>
          <PersonIcon />
        </IconButton>
      ) : (
        <Button
          className={stl.root__button}
          variant="outlined"
          endIcon={<PersonIcon />}
        >
          {login ? "login" : "sign up"}
        </Button>
      )}
    </div>
  );
};

export default Actions;
