import { SxProps } from "@mui/material";
import Grid from "@mui/material/Grid";

const TripleGrid = ({
  spacing,
  elements,
  className,
  breakpoint,
  sx,
}: {
  spacing?: number;
  elements: JSX.Element[];
  className?: string;
  breakpoint?: "sm" | "md";
  sx?: SxProps;
}) => {
  return (
    <Grid sx={sx} className={className || ""} container spacing={spacing || 2}>
      {elements.map((El, i) => (
        <Grid xs={12} {...{ [breakpoint || "md"]: 4 }} item key={i}>
          {El}
        </Grid>
      ))}
    </Grid>
  );
};

export default TripleGrid;
