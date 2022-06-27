import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import AddIcon from "@mui/icons-material/Add";
import stl from "./NumberPicker.module.scss";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";

const NumberPicker = ({
  defaultValue,
  onAddValue,
  onReduceValue,
  onChangeValue,
}: {
  defaultValue: number;
  onAddValue: () => void;
  onReduceValue: () => void;
  onChangeValue: (val: number) => void;
}) => {
  const [value, setValue] = useState<number>(defaultValue);
  const addHandler = () =>
    setValue((val) => {
      const result = val + 1;
      onAddValue();
      return result;
    });
  const reduceHandler = () =>
    setValue((val) => {
      const result = val - 1;
      onReduceValue();
      return result;
    });
  const changeHandler: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target }) =>
    setValue(() => {
      const result = Number(target.value);
      onChangeValue(result);
      return result;
    });
  return (
    <Stack className={stl.root} component="div" direction="row" spacing={0}>
      <IconButton className={`${stl.root__button__reduce} ${stl.root__button}`} size={"small"} onClick={reduceHandler}>
        <RemoveIcon />
      </IconButton>
      <div className={stl.root__input}>
        <InputBase className={stl.root__input__txtfield} onChange={changeHandler} value={value} />
      </div>
      <IconButton className={`${stl.root__button__add} ${stl.root__button}`} size={"small"} onClick={addHandler}>
        <AddIcon />
      </IconButton>
    </Stack>
  );
};

export default NumberPicker;
