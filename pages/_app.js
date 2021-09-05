import Nav from "../components/general/nav";

import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="cuerpo">
      <Head>
        <meta name="theme-color" content="#222" />
      </Head>
      <div>
        <Nav />
      </div>
      <Component {...pageProps} />
      <style jsx>{`
        .cuerpo {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 3rem auto;
          grid-template-areas: "nav";
        }
      `}</style>
    </div>
  );
}

export default MyApp;
