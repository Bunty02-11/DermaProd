import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { LanguageContext } from "../pages/_app";
import Loader from "./Loader/Loader";
import FloatingIcon from "./floating-icon/floating-icon";

export default function Layout({ children }) {
  const { language } = useContext(LanguageContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <main
          // dir={language === "ar" ? "rtl" : "ltr"}
          >
            {children}
          </main>
          <FloatingIcon />
        </>
      )}
    </div>
  );
}
