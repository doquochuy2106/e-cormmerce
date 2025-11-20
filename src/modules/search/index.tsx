import Section from "@/components/section";
import { ProductItemSkeleton } from "@/components/skeleton";
import { HTMLAttributes, Suspense, useEffect, useRef, useState } from "react";
import { Box, Header, Input, Page } from "zmp-ui";
import { RecommendedProducts } from "./components/recommend-product";
import { InputRef } from "zmp-ui/input";
import SearchResult from "./components/search-result";
import BottomBar from "./components/bottom-bar";

export function DisplaySearchPage() {
  const [keyword, setKeyword] = useState<string>("");

  const searchRef = useRef<InputRef | null>(null);
  useEffect(() => {
    setTimeout(() => {
      searchRef.current?.input?.focus();
    }, 50);
  }, []);
  return (
    <Page className="hide-scrollbar overflow-x-hidden">
      <Header
        title={
          (
            <div className="w-[75%] flex flex-col">
              <div className="flex items-center gap-2 w-full">
                <span className="text-black font-semibold text-lg">
                  Sendo Farm
                </span>
              </div>
            </div>
          ) as unknown as string
        }
      />
      <div className="pt-16" />
      <div className="bg-white p-3">
        <Input.Search
          ref={searchRef}
          placeholder="Tìm sản phẩm"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      {keyword === "" ? (
        <RecommendedProducts backgroundColor="bg-green-100" showAll />
      ) : (
        <Box className="flex-1 overflow-y-auto overflow-x-hidden hide-scrollbar">
          <SearchResult keyword={keyword} />
        </Box>
      )}
      <div className="h-16" />
      <BottomBar />
    </Page>
  );
}

export function SearchResultSkeleton() {
  return (
    <Section title={`Kết quả`}>
      <ProductGridSkeleton />
    </Section>
  );
}

export function ProductGridSkeleton({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={"grid grid-cols-2 px-4 pt-2 pb-8 gap-4 ".concat(
        className ?? ""
      )}
      {...props}
    >
      <ProductItemSkeleton />
      <ProductItemSkeleton />
      <ProductItemSkeleton />
      <ProductItemSkeleton />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchResultSkeleton />}>
      <DisplaySearchPage />
    </Suspense>
  );
}
