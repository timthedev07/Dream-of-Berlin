import "../css/globals.css";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Footer } from "../components/Footer";
import Head from "next/head";

const metadata = {
  title: "Dream of Berlin",
  image: "",
  description: "Get to know about the awesome city of Berlin!",
};

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.title} />
        <meta name="keywords" content="auction, platform, trade" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="0 days" />
        <meta name="author" content="Tim <timpersonal07@gmail.com>" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:site_name" content={metadata.title} />
        <meta property="og:url" content="https://dream-of-berlin.vercel.app" />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:description" content={metadata.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@timthedev07" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <meta
          name="google-site-verification"
          content="xq42Z1CCBkK6X77Zf_fAKg44n6iXM3lCLMYT4B7Sdbw"
        />
      </Head>

      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
