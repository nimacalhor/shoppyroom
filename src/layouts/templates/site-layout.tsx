import { Category } from "@modules/category/libraries/category-types";
import Footer from "@layouts/general/footer";
import Header from "../general/header";


const SiteLayout = ({
  children,
  categoryList,
}: {
  children: any;
  categoryList: Category[];
}) => {
  return (
    <>
      <Header categoryList={categoryList} />
      <main>{children}</main>
      <Footer  />
    </>
  );
};

export default SiteLayout;
