import { Fragment, createContext, useState } from "react";
import Head from "next/head";
import "./global.css";
import Layout from "../components/Layout";
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
export const LanguageContext = createContext();

function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Fragment>
        <Head>
          <title>DERMATECH CLINIC</title>
          {/* bing code */}
          <meta
            name="msvalidate.01"
            content="D1C198BDBBE2925A9EF0433A45A70583"
          />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Fragment>
    </LanguageContext.Provider>
  );
}

export default MyApp;
