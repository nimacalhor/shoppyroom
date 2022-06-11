import { fetchCategoryList } from "@modules/category/store/api/category-api";
import { Category } from "@modules/category/libraries/category-types";
import SiteLayout from "@layouts/templates/site-layout";
import { ThemeProvider } from "@mui/material/styles";
import { NextPage, NextComponentType } from "next";
import { CssBaseline } from "@mui/material";
import { wrapper } from "@root/store";
import theme from "@root/theme";
import "@styles/main.scss";

const WrappedApp: NextPage<any> = function ({
  Component,
  pageProps,
  categoryList,
}: {
  Component: NextComponentType;
  pageProps: any;
  categoryList: Category[];
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SiteLayout categoryList={categoryList}>
        <Component {...pageProps} />
      </SiteLayout>
    </ThemeProvider>
  );
};

WrappedApp.getInitialProps = async function ({ Component, ctx }: any) {
  let categoryList;
  const response = await fetchCategoryList({});
  if (response.data.length > 0) categoryList = response.data;
  else categoryList = null;
  return {
    categoryList,
  };
};

export default wrapper.withRedux(WrappedApp);
