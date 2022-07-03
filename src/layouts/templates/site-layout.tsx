import { fetchCategoryList } from "@modules/category/store/api/category-api";
import { Category } from "@modules/category/libraries/category-types";
import Footer from "@layouts/general/footer";
import { useEffect, useState } from "react";
import Header from "../general/header";

const SiteLayout = ({ children }: { children: any }) => {
  const [categoryList, setCategoryList] = useState<null | Category[]>(null);
  useEffect(() => {
    fetchCategoryList().then((data) => setCategoryList(data.category_list));
  }, []);
  return (
    <>
      <Header categoryList={categoryList} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default SiteLayout;
