import React from "react";
import { getSystemInfo } from "zmp-sdk";
import { App, Box, SnackbarProvider, ZMPRouter } from "zmp-ui";
import { AppProps } from "zmp-ui/app";
import { Route, Routes } from "react-router";
import HomePage from "@/modules/home/index";
import AppLayout from "./components/layout";

const SnackbarProviderComponent = ((SnackbarProvider as any).default ??
  SnackbarProvider) as React.ComponentType<any>;

const Layout = () => {
  return (
    <App theme={getSystemInfo().zaloTheme as AppProps["theme"]}>
      <SnackbarProviderComponent>
        <ZMPRouter>
          <Routes>
            {/* LayoutWrapper là element cho route root — Outlet dùng để render HomePage */}
            <Route path="/" element={<AppLayout />}>
              <Route index element={<HomePage />} />
              {/* <Route path="other" element={<OtherPage />} /> */}
            </Route>
          </Routes>
        </ZMPRouter>
      </SnackbarProviderComponent>
    </App>
  );
};
export default Layout;
