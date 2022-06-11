import UnderlinedLink from "@modules/general/components/underlined-link";
import MenuDrawer from "@layouts/general/header/components/menu-drawer";
import { Category } from "@modules/category/libraries/category-types";
import { DeviceType } from "@modules/general/libraries/device-type";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import stl from "./CategoryMenu.module.scss";
import Divider from "@mui/material/Divider";
import { useState, Fragment } from "react";

const CategoryMenu = ({
  categoryList,
  deviceType,
}: {
  categoryList: Category[];
  deviceType: DeviceType;
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const onCloseHandler = () => setDrawerOpen(false);
  return (
    <div className={stl.root}>
      {deviceType.isScreen ? (
        <>
          {categoryList
            .sort(({ id: idA }, { id: idB }) => idB - idA)
            .map((ctg) => (
              <Fragment key={ctg.id}>
                <UnderlinedLink underlined={false} key={ctg.id} href={ctg.link}>
                  {ctg.title}
                </UnderlinedLink>
                {deviceType.isScreen && (
                  <Divider
                    key={ctg.id + ctg.title}
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
          <MenuDrawer
            drawerState={drawerOpen}
            onDrawerClose={onCloseHandler}
            categoryList={categoryList}
          />
        </>
      )}
    </div>
  );
};

export default CategoryMenu;
