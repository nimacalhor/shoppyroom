import { Brand } from "@modules/brand/libraries/brand-types";
import FormControlLabel from "@mui/material/FormControlLabel";
import PanelAccordion from "../panel-accordion";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";

const BrandsCheckbox = ({
  brandList,
  onChange,
}: {
  brandList: Brand[];
  onChange: (arr: (string | undefined)[]) => void;
}) => {
  const initState: { [key: string]: boolean } = {};
  brandList.forEach((brd) => (initState[brd.title] = false));
  const [state, setState] = useState<{ [key: string]: boolean }>(initState);
  const changeHandler = ({ target }: React.ChangeEvent<any>) => {
    setState((prev) => {
      const newState = {
        ...prev,
        [target.name]: !prev[target.name],
      };

      const resultArr = Object.entries(newState).map(([key, value]) => {
        if (value)
          return [...brandList]
            .find(({ title }) => title === key)
            ?.id.toString();
      });
      onChange(resultArr);
      return newState;
    });
  };
  return (
    <PanelAccordion title="brands">
      <FormGroup>
        {brandList.map((brd) => (
          <FormControlLabel
            key={brd.id}
            control={
              <Checkbox
                checked={state[brd.title]}
                name={brd.title}
                onChange={changeHandler}
              />
            }
            label={brd.title}
          />
        ))}
      </FormGroup>
    </PanelAccordion>
  );
};

export default BrandsCheckbox;
