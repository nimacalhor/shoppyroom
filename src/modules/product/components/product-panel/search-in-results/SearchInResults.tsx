import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import stl from "./SearchInResults.module.scss";
import Divider from "@mui/material/Divider";
import { useState } from "react";

const SearchInResults = ({
  onSubmit,
}: {
  onSubmit: (value: string) => void;
}) => {
  const [value, setValue] = useState<string>("");
  const changeHandler = (e: React.ChangeEvent<any>) => setValue(e.target.value);
  const submitHandler = () => onSubmit(value);
  return (
    <div className="panel">
      <Typography gutterBottom>search in results :</Typography>
      <Divider variant="middle" />
      <InputBase
        onSubmit={submitHandler}
        className={stl.root__input}
        fullWidth
        id="header__searchBox"
        placeholder="name of product"
        value={value}
        onChange={changeHandler}
        startAdornment={
          <IconButton onClick={submitHandler}>
            <SearchIcon className={stl.root__input__icon} />
          </IconButton>
        }
      />
    </div>
  );
};

export default SearchInResults;
