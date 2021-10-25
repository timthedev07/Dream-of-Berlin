import "../css/globals.css";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Footer } from "../components/Footer";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
