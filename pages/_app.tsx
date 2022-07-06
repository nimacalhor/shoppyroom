import SiteLayout from "@layouts/templates/site-layout";
import type { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { NextPage, NextComponentType } from "next";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CssBaseline } from "@mui/material";
import { wrapper } from "@root/store";
import theme from "@root/theme";
import "@styles/main.scss";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const WrappedApp: NextPage<any> = function ({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: NextPageWithLayout;
  pageProps: any;
}) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {Component.getLayout ? (
          Component.getLayout(<Component {...pageProps} />)
        ) : (
          <SiteLayout>{getLayout(<Component {...pageProps} />)}</SiteLayout>
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
      </ThemeProvider>
    </SessionProvider>
  );
};

export default wrapper.withRedux(WrappedApp);
