import { useState, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  AI,
  Design,
  Error,
  EyadAyman,
  Home,
  KirolosAdel,
  Marketing,
  MohamedReda,
  SeifEldin,
  Web,
  Yassmin,
} from "./pages";
import logo from "./assets/icon-512x512.webp";
import "./App.scss";

const App = () => {
  //loading
  const [loading, setLoading] = useState("false");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  function Wrapper({ children }) {
    const location = useLocation();

    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    return children;
  }
  // page appear
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 loader">
          <img src={logo} alt="logo" width={200} height={200} />
          <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
          </div>
        </div>
      ) : (
        <>
          <main className="bg-[#f5f9fa] dark:bg-[#1e1e1e] min-h-screen duration-[0.3s]">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 2 }}
            >
              <Wrapper>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/web-development" element={<Web />} />
                  <Route path="/design" element={<Design />} />
                  <Route path="/ai" element={<AI />} />
                  <Route path="/digital-marketing" element={<Marketing />} />
                  <Route path="/mohamed-reda" element={<MohamedReda />} />
                  <Route path="/eyad-ayman" element={<EyadAyman />} />
                  <Route path="/seif-eldin-sameh" element={<SeifEldin />} />
                  <Route path="/kirolos-adel" element={<KirolosAdel />} />
                  <Route path="/yassmin" element={<Yassmin />} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </Wrapper>
            </motion.div>
          </main>
        </>
      )}
    </>
  );
};

export default App;
