import UnderlinedLink from "@modules/general/components/underlined-link";
import MenuDrawer from "@layouts/general/header/components/menu-drawer";
import { Category } from "@modules/category/libraries/category-types";
import { DeviceType } from "@modules/general/libraries/device-type";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Skeleton from "@mui/material/Skeleton";
import stl from "./CategoryMenu.module.scss";
import Divider from "@mui/material/Divider";
import { useState, Fragment } from "react";

const CategoryMenu = ({
  categoryList,
  deviceType,
}: {
  categoryList: Category[] | null;
  deviceType: DeviceType;
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const onCloseHandler = () => setDrawerOpen(false);
  const itemsToIterate = categoryList
    ? categoryList.sort(({ id: idA }, { id: idB }) => idB - idA)
    : new Array(7).fill(0);
  return (
    <div className={stl.root}>
      {deviceType.isScreen ? (
        <>
          {itemsToIterate.map((ctg, i) => (
            <Fragment key={categoryList ? ctg.id : i}>
              {!categoryList && (
                <Typography variant="h4">
                  <Skeleton sx={{ width: 100 }} />
                </Typography>
              )}
              {categoryList && (
                <UnderlinedLink underlined={false} href={ctg.link}>
                  {ctg.title}
                </UnderlinedLink>
              )}
              {deviceType.isScreen && (
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                />
              )}
            </Fragment>
          ))}
          <UnderlinedLink underlined={false} href="/">
            home
          </UnderlinedLink>
        </>
      ) : (
        <>
          <Typography color="ButtonText" variant="h5">
            shoppyroom
          </Typography>
          <IconButton onClick={() => setDrawerOpen(true)}>
            <MenuIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
          {categoryList && (
            <MenuDrawer
              drawerState={drawerOpen}
              onDrawerClose={onCloseHandler}
              categoryList={categoryList}
            />
          )}
        </>
      )}
    </div>
  );
};

export default CategoryMenu;
