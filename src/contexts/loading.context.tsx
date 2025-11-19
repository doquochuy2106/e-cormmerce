import React, { createContext, useContext, useRef, useState } from "react";
import { Spinner } from "zmp-ui";
import logo from "@/assets/logo.png";

interface LoadingContextType {
  show: () => void;
  hide: () => void;
  isLoading: boolean;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const countRef = useRef(0);

  const show = () => {
    countRef.current += 1;
    if (countRef.current === 1) setIsLoading(true);
  };

  const hide = () => {
    countRef.current = Math.max(0, countRef.current - 1);
    if (countRef.current === 0) setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ show, hide, isLoading }}>
      {isLoading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.45)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <Spinner visible logo={logo} />
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const ctx = useContext(LoadingContext);
  if (!ctx) throw new Error("useLoading must be used inside LoadingProvider");
  return ctx;
};
