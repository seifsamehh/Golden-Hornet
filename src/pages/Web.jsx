import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import logo from "../assets/icon-512x512.webp";
import { Footer, ServicesHeader, Meeting } from "../components";
import { Parallax } from "react-scroll-parallax";
import "../styles/web.scss";
const Web = () => {
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
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 2 }}
        >
          <ServicesHeader />
          <section className="web-hero min-h-screen flex justify-center items-center overflow-hidden">
            <Parallax scale={[0, 1.5, 0, 1.5]}>
              <h1 className="min-[290px]:text-4xl md:text-9xl dark:text-white">
                Web Development
              </h1>
            </Parallax>
          </section>
          <section className="web-services overflow-hidden">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="flex min-[290px]:flex-wrap-reverse md:flex-nowrap justify-around w-full">
                <div className="lg:w-2/5 md:w-fullmd:pr-10 md:py-6">
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-[#0f74bd] pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffcc00] inline-flex items-center justify-center text-white relative z-10">
                      <p>1</p>
                    </div>
                    <div className="flex items-center flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 dark:text-white mb-1 tracking-wider">
                        Fully responsive website
                      </h2>
                    </div>
                  </div>
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-[#0f74bd] pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffcc00] inline-flex items-center justify-center text-white relative z-10">
                      <p>2</p>
                    </div>
                    <div className="flex items-center flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 dark:text-white mb-1 tracking-wider">
                        Landing page
                      </h2>
                    </div>
                  </div>
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-[#0f74bd] pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffcc00] inline-flex items-center justify-center text-white relative z-10">
                      <p>3</p>
                    </div>
                    <div className="flex items-center flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 dark:text-white mb-1 tracking-wider">
                        SEO package
                      </h2>
                    </div>
                  </div>
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-[#0f74bd] pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffcc00] inline-flex items-center justify-center text-white relative z-10">
                      <p>4</p>
                    </div>
                    <div className="flex items-center flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 dark:text-white mb-1 tracking-wider">
                        E-commerce website
                      </h2>
                    </div>
                  </div>
                  <div className="flex relative">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffcc00] inline-flex items-center justify-center text-white relative z-10">
                      <p>5</p>
                    </div>
                    <div className="flex items-center flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 dark:text-white mb-1 tracking-wider">
                        Cross platform
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="web-offers">
                  <h1 className="text-4xl mb-6 md:text-left min-[290px]:text-center dark:text-white">
                    What we offer in web development department
                  </h1>
                  <p className="md:text-left min-[290px]:text-center dark:text-white">
                    We provide modern, creative and fully functional websites
                    that you can rely on to grow your company.
                  </p>
                  <p className="md:text-left min-[290px]:text-center md:mt-40 dark:text-white">
                    <strong>
                      NOTE ALL THE SERVICES PRICES DEPEND ON THE REQUIREMENTS OF
                      YOU SO I RECOMMEND SCHEDULING A MEETING WITH US &#x1F609;.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <Meeting />
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default Web;
