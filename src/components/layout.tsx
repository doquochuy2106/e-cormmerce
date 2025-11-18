import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { Suspense } from "react";
import { PageSkeleton } from "./skeleton";
import { Toaster } from "react-hot-toast";
import { Page } from "zmp-ui";

export default function AppLayout() {
  return (
    <Page className="flex flex-col">
      <div className="w-full h-screen flex flex-col bg-section text-foreground overflow-hidden">
        <Header />
        <div
          className="flex-1 overflow-y-auto overflow-x-hidden bg-background hide-scrollbar"
          style={{ paddingTop: "100px" }}
        >
          <Suspense fallback={<PageSkeleton />}>
            <Outlet />
          </Suspense>
        </div>
        <Footer />
        <Toaster
          containerClassName="toast-container"
          containerStyle={{
            top: "calc(50% - 24px)",
          }}
        />
      </div>
    </Page>
  );
}
