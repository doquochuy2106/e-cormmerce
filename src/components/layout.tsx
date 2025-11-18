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
      <div className="w-screen h-screen flex flex-col bg-section text-foreground">
        <Header />
        <div
          className="flex-1 overflow-y-auto bg-background"
          style={{ paddingTop: "40px" }}
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
