import { Fragment, createContext, useState } from "react";
import Head from "next/head";
import "./global.css";
import Layout from "../components/Layout";
export const LanguageContext = createContext();

function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Fragment>
        <Head>
          <title>DERMATECH CLINIC</title>
          <meta
            name="msvalidate.01"
            content="D1C198BDBBE2925A9EF0433A45A70583"
          />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {/*  */}
          <script
            src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
            crossorigin
          ></script>

          <script
            src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
            crossorigin
          ></script>

          <script
            src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossorigin
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
            crossorigin="anonymous"
          ></script>
          {/*  */}
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Fragment>
    </LanguageContext.Provider>
  );
}

export default MyApp;
