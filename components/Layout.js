import { useContext } from "react";
import { LanguageContext } from "../pages/_app";

export default function Layout({ children }) {
  const { language } = useContext(LanguageContext);
  console.log("language", language);
  return (
    <div>
      <main dir={language === "ar" ? "rtl" : "ltr"}>{children}</main>
    </div>
  );
}
