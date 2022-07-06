import Button, { ButtonProps } from "@mui/material/Button";
import { useTheme, SxProps } from "@mui/material";

function DashboardNavItem({
  active,
  children,
  ...ButtonProps
}: ButtonProps & {
  active: boolean;
  children: any;
}) {
  const theme = useTheme();
  const activeStyle: SxProps = {
    bgcolor: `${theme.palette.primary.light}`,
  };
  return (
    <Button
      sx={active ? activeStyle : null}
      fullWidth
      size="large"
      variant="text"
      color="primary"
      {...ButtonProps}
    >
      {children}
    </Button>
  );
}

export default DashboardNavItem;
