import { fetchCategoryList } from "@modules/category/store/api/category-api";
import { Category } from "@modules/category/libraries/category-types";
import SiteLayout from "@layouts/templates/site-layout";
import type { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { NextPage, NextComponentType } from "next";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CssBaseline } from "@mui/material";
import { wrapper } from "@root/store";
import { Session } from "next-auth";
import theme from "@root/theme";
import "@styles/main.scss";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const WrappedApp: NextPage<any> = function ({
  Component,
  pageProps: { session, ...pageProps },
  categoryList,
}: {
  Component: NextPageWithLayout;
  pageProps: any;
  categoryList: Category[];
}) {
  const getLayout = Component.getLayout || ((page) => page);
  // if (Component.getLayout)
  //   return Component.getLayout(<Component {...pageProps} />);
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
        <CssBaseline />
        {Component.getLayout ? (
          Component.getLayout(<Component {...pageProps} />)
        ) : (
          <SiteLayout categoryList={categoryList}>
            {getLayout(<Component {...pageProps} />)}
          </SiteLayout>
        )}
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </SessionProvider>
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
