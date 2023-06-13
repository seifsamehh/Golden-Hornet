import { useState, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { AI, Design, Home, Marketing, Web } from "./pages";
import logo from "./assets/icon-512x512.webp";
import "./App.scss";

const App = () => {
  // count down
  function Countdown({ initialValue = 5 }) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
      if (value > 0) {
        const timerId = setInterval(() => {
          setValue((prevValue) => prevValue - 1);
        }, 1000);

        return () => clearInterval(timerId);
      }
    }, [value]);

    return (
      <span className="text-6xl countdown">
        <span style={{ "--value": value }}></span>
      </span>
    );
  }
  Countdown.propTypes = {
    initialValue: PropTypes.number.isRequired,
  };
  const isLoading = false;
  //loading
  const [loading, setLoading] = useState("false");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
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
          {isLoading ? <span>Loaded!</span> : <Countdown initialValue={5} />}
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
                  {/* <Route path="*" element={<Error />} /> */}
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
