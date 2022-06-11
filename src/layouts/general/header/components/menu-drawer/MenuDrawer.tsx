import { Category } from "@modules/category/libraries/category-types";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import stl from "./MenuDrawer.module.scss";
import Drawer from "@mui/material/Drawer";
import { useRouter } from "next/router";
import Link from "next/link";

const MenuDrawer = ({
  categoryList,
  drawerState,
  onDrawerClose,
}: {
  categoryList: Category[];
  drawerState: boolean;
  onDrawerClose: () => void;
}) => {
  const { pathname } = useRouter();
  return (
    <Drawer
      open={drawerState}
      onClose={onDrawerClose}
      anchor="right"
      className={stl.root}
    >
      <div className={stl.root__close}>
        <IconButton onClick={onDrawerClose} size="large">
          <CloseIcon />
        </IconButton>
      </div>
      <ul className={`list-reset ${stl.root__list}`}>
        <li
          className={`${stl.root__list__item} ${
            pathname === "/" ? stl["root__list__item--active"] : ""
          }`}
        >
          <Link href="/" passHref>
            <Typography variant="h5">Home</Typography>
          </Link>
        </li>
        {categoryList.map((ctg) => (
          <li
            className={`${stl.root__list__item} ${
              pathname === ctg.link ? stl["root__list__item--active"] : ""
            }`}
            key={ctg.id}
          >
            <Link href={ctg.link} passHref>
              <Typography variant="h5">{ctg.title}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </Drawer>
  );
};

export default MenuDrawer;
