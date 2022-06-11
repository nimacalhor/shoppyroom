import stl from "./FloatText.module.scss";
import Box from "@mui/material/Box";

const FloatText = ({
  inset,
  padding,
  children,
}: {
  inset: [string, string, string, string];
  padding: [number, number];
  children: any;
}) => {
  const [top, right, bottom, left] = inset;
  const [pr, pl] = padding;
  return (
    <Box
      sx={{
        inset: `${top} ${right} ${bottom} ${left}`,
        pr,
        pl,
      }}
      className={stl.root}
    >
      {children}
    </Box>
  );
};

export default FloatText;
