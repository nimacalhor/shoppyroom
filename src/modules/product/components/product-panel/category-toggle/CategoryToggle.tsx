import { Category } from "@modules/category/libraries/category-types";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import PanelAccordion from "../panel-accordion";
import stl from "./CategoryToggle.module.scss";
import { useState } from "react";

const CategoryToggle = ({
  onChange,
  categoryList,
  init = null,
}: {
  onChange: (ctgArr: string[]) => void;
  categoryList: Category[];
  init: string[] | null;
}) => {
  const [selectedCtg, setSelectedCtg] = useState<string[] | null>(null);
  const changeHandler = (_: any, newValue: string[]) => {
    setSelectedCtg(() => {
      if (newValue) onChange(newValue.map(String));
      return newValue;
    });
  };

  return (
    <PanelAccordion title="category">
      <ToggleButtonGroup
        color="primary"
        fullWidth
        className={stl.root__btnGroup}
        orientation="vertical"
        value={selectedCtg}
        onChange={changeHandler}
      >
        {categoryList.map((ctg) => (
          <ToggleButton
            key={ctg.id}
            value={ctg.id}
          >
            {ctg.title}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </PanelAccordion>
  );
};

export default CategoryToggle;
