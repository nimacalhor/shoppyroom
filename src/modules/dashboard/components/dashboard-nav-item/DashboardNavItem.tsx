import Button, { ButtonProps } from "@mui/material/Button";

function DashboardNavItem({
  active,
  children,
  ...ButtonProps
}: ButtonProps & {
  active: boolean;
  children: any;
}) {
  return (
    <Button
      fullWidth
      size="large"
      variant="text"
      color="secondary"
      {...ButtonProps}
    >
      {children}
    </Button>
  );
}

export default DashboardNavItem;
