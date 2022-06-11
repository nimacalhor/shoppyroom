import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import stl from "./SearchInput.module.scss";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();
  const submitHandler = () => {
    if (searchValue) router.push(`/product/search/${searchValue}`);
  };
  return (
    <InputBase
      onSubmit={submitHandler}
      className={stl.root}
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      fullWidth
      id="header__searchBox"
      placeholder="search in products"
      startAdornment={
        <IconButton onClick={submitHandler} className={stl.root__button}>
          <SearchIcon className={stl.root__icon} />
        </IconButton>
      }
    />
  );
};

export default SearchInput;
