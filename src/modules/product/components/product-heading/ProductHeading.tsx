import { SORTING_TYPES } from "@modules/general/libraries/general-types";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Typography from "@mui/material/Typography";
import stl from "./ProductHeading.module.scss";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const ProductHeading = ({
  title,
  onChange,
}: {
  title: string;
  onChange: (srt: SORTING_TYPES) => void;
}) => {
  const [sorting, setSorting] = useState<SORTING_TYPES | null>(null);
  const changeHandler = (_: any, newValue: SORTING_TYPES) => {
    setSorting(() => {
      if (newValue) onChange(newValue);
      return newValue;
    });
  };
  return (
    <div className={stl.root}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Stack spacing={2} alignItems="center" direction={"row"}>
        <Typography>sort by </Typography>
        <ToggleButtonGroup
        className={stl.root__btnGroup}
          value={sorting}
          exclusive
          color="primary"
          onChange={changeHandler}
        >
          <ToggleButton value={SORTING_TYPES.none}>none</ToggleButton>
          <ToggleButton value={SORTING_TYPES.new}>new</ToggleButton>
          <ToggleButton value={SORTING_TYPES.cheapest}>cheapest</ToggleButton>
          <ToggleButton value={SORTING_TYPES.expensive}>
            most expensive
          </ToggleButton>
          <ToggleButton value={SORTING_TYPES.likeCount}>
            like count
          </ToggleButton>
          <ToggleButton value={SORTING_TYPES.promotion}>promotion</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </div>
  );
};

export default ProductHeading;
