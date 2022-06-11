import { Category } from "@modules/category/libraries/category-types";
import useDeviceType from "@modules/general/libraries/device-type";
import Logo from "@modules/general/components/logo";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import stl from "./Header.module.scss";
import Grid from "@mui/material/Grid";
import dynamic from "next/dynamic";

const SearchInput = dynamic(() => import("./components/search-input")),
  HeaderActions = dynamic(() => import("./components/actions-box")),
  CategoryMenu = dynamic(
    () => import("@modules/category/components/category-menu")
  ),
  UnderlinedLink = dynamic(
    () => import("@modules/general/components/underlined-link")
  );

const Header = ({ categoryList }: { categoryList: Category[] }) => {
  const deviceType = useDeviceType();
  return (
    <>
      <AppBar position="relative" className={stl.root}>
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <Logo deviceType={deviceType} />
            </Grid>
            <Grid item xs={6} md={6}>
              {deviceType.isMobileOrTablet ? (
                <HeaderActions
                  deviceType={deviceType}
                  cartInventory={8}
                  login={false}
                />
              ) : (
                <SearchInput />
              )}
            </Grid>
            <Grid item xs={12} md={3}>
              {deviceType.isScreen ? (
                <HeaderActions
                  deviceType={deviceType}
                  cartInventory={8}
                  login={false}
                />
              ) : (
                <SearchInput />
              )}
            </Grid>
            <Grid item xs={12}>
              <CategoryMenu
                deviceType={deviceType}
                categoryList={categoryList}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
    </>
  );
};

export default Header;
