import Grid from "@mui/material/Grid";

const TripleGrid = ({
  spacing,
  elements,
  className,
  breakpoint,
}: {
  spacing?: number;
  elements: JSX.Element[];
  className?: string;
  breakpoint?: "sm" | "md";
}) => {
  return (
    <Grid className={className || ""} container spacing={spacing || 2}>
      {elements.map((El, i) => (
        <Grid xs={12} {...{ [breakpoint || "md"]: 4 }} item key={i}>
          {El}
        </Grid>
      ))}
    </Grid>
  );
};

export default TripleGrid;
