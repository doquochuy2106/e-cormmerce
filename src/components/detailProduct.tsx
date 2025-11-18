import { Header, Page } from "zmp-ui";
import Footer from "./footer";

export default function DetailProduct() {
  return (
    <Page className="flex flex-col">
      <div className="w-screen h-screen flex flex-col bg-section text-foreground">
        <Header />
        <Footer />
      </div>
    </Page>
  );
}
