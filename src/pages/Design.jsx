import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import logo from "../assets/icon-512x512.webp";
import { Footer, ServicesHeader, Meeting } from "../components";
import { Parallax } from "react-scroll-parallax";
import "../styles/design.scss";

const Design = () => {
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
          <section className="flex items-center justify-center min-h-screen overflow-hidden design-hero">
            <Parallax scale={[0, 1.5, 0, 1.5]}>
              <h1 className="min-[290px]:text-8xl md:text-9xl text-center dark:text-white">
                Design
              </h1>
            </Parallax>
          </section>
          <section className="overflow-hidden design-services">
            <div className="container flex flex-wrap px-5 py-24 mx-auto">
              <div className="flex min-[290px]:flex-wrap-reverse md:flex-nowrap justify-around w-full">
                <div className="lg:w-2/5 md:w-fullmd:pr-10 md:py-6">
                  <div className="relative flex pb-12">
                    <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                      <div className="h-full w-1 bg-[#0f74bd] pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffcc00] inline-flex items-center justify-center text-white relative z-10">
                      <p>1</p>
                    </div>
                    <div className="flex items-center flex-grow pl-4">
                      <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font dark:text-white">
                        UI / UX page
                      </h2>
                    </div>
                  </div>
                  <div className="relative flex pb-12">
                    <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                      <div className="h-full w-1 bg-[#0f74bd] pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffcc00] inline-flex items-center justify-center text-white relative z-10">
                      <p>2</p>
                    </div>
                    <div className="flex items-center flex-grow pl-4">
                      <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font dark:text-white">
                        Account design direction
                      </h2>
                    </div>
                  </div>
                  <div className="relative flex pb-12">
                    <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                      <div className="h-full w-1 bg-[#0f74bd] pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffcc00] inline-flex items-center justify-center text-white relative z-10">
                      <p>3</p>
                    </div>
                    <div className="flex items-center flex-grow pl-4">
                      <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font dark:text-white">
                        Motion graphic
                      </h2>
                    </div>
                  </div>
                  <div className="relative flex pb-12">
                    <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                      <div className="h-full w-1 bg-[#0f74bd] pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffcc00] inline-flex items-center justify-center text-white relative z-10">
                      <p>4</p>
                    </div>
                    <div className="flex items-center flex-grow pl-4">
                      <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font dark:text-white">
                        Video montage
                      </h2>
                    </div>
                  </div>
                  <div className="relative flex pb-12">
                    <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                      <div className="h-full w-1 bg-[#0f74bd] pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffcc00] inline-flex items-center justify-center text-white relative z-10">
                      <p>5</p>
                    </div>
                    <div className="flex items-center flex-grow pl-4">
                      <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font dark:text-white">
                        Design logo
                      </h2>
                    </div>
                  </div>
                  <div className="relative flex pb-12">
                    <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                      <div className="h-full w-1 bg-[#0f74bd] pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffcc00] inline-flex items-center justify-center text-white relative z-10">
                      <p>6</p>
                    </div>
                    <div className="flex items-center flex-grow pl-4">
                      <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font dark:text-white">
                        Design social media
                      </h2>
                    </div>
                  </div>
                  <div className="relative flex pb-12">
                    <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                      <div className="h-full w-1 bg-[#0f74bd] pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffcc00] inline-flex items-center justify-center text-white relative z-10">
                      <p>7</p>
                    </div>
                    <div className="flex items-center flex-grow pl-4">
                      <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font dark:text-white">
                        Prodcasting graphic
                      </h2>
                    </div>
                  </div>
                  <div className="relative flex pb-12">
                    <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                      <div className="h-full w-1 bg-[#0f74bd] pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffcc00] inline-flex items-center justify-center text-white relative z-10">
                      <p>8</p>
                    </div>
                    <div className="flex items-center flex-grow pl-4">
                      <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font dark:text-white">
                        After effect promo
                      </h2>
                    </div>
                  </div>
                  <div className="relative flex pb-12">
                    <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                      <div className="h-full w-1 bg-[#0f74bd] pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffcc00] inline-flex items-center justify-center text-white relative z-10">
                      <p>9</p>
                    </div>
                    <div className="flex items-center flex-grow pl-4">
                      <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font dark:text-white">
                        Logo motion
                      </h2>
                    </div>
                  </div>
                  <div className="relative flex pb-12">
                    <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                      <div className="h-full w-1 bg-[#0f74bd] pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffcc00] inline-flex items-center justify-center text-white relative z-10">
                      <p>10</p>
                    </div>
                    <div className="flex items-center flex-grow pl-4">
                      <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font dark:text-white">
                        Business branding identity
                      </h2>
                    </div>
                  </div>
                  <div className="relative flex pb-12">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffcc00] inline-flex items-center justify-center text-white relative z-10">
                      <p>11</p>
                    </div>
                    <div className="flex items-center flex-grow pl-4">
                      <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font dark:text-white">
                        Package design
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="design-offers">
                  <h1 className="text-4xl mb-6 md:text-left min-[290px]:text-center dark:text-white">
                    What we offer in design department
                  </h1>
                  <p className="md:text-left min-[290px]:text-center dark:text-white">
                    We provide modern and creative designs that you can rely on
                    to grow your company.
                  </p>
                  <p className="md:text-left min-[290px]:text-center md:mt-40 dark:text-white min-[290px]:my-4">
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

export default Design;
