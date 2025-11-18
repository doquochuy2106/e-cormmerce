import React from "react";
import { getSystemInfo } from "zmp-sdk";
import { App, Box, SnackbarProvider, ZMPRouter } from "zmp-ui";
import { AppProps } from "zmp-ui/app";
import { Route, Routes } from "react-router";
import HomePage from "@/modules/home/index";
import AppLayout from "./components/layout";
import SearchPage from "./modules/search";
import ProductDetailPage from "./modules/product-detail";
import PromotionPage from "./modules/promotion";

const SnackbarProviderComponent = ((SnackbarProvider as any).default ??
  SnackbarProvider) as React.ComponentType<any>;

const Layout = () => {
  return (
    <App theme={getSystemInfo().zaloTheme as AppProps["theme"]}>
      <SnackbarProviderComponent>
        <ZMPRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<HomePage />} />
            </Route>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/promotion" element={<PromotionPage />} />
          </Routes>
        </ZMPRouter>
      </SnackbarProviderComponent>
    </App>
  );
};
export default Layout;
