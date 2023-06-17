import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/icon-512x512.webp";
import { Footer, ServicesHeader, Meeting } from "../components";
import { Parallax } from "react-scroll-parallax";
import { Helmet } from "react-helmet-async";
import "../styles/web.scss";
const Web = () => {
  //loading
  const [loading, setLoading] = useState("false");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
      <Helmet>
        <meta charset="UTF-8" />
        <title>Web Development</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="application-name" content="Golden Hornet" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Golden Hornet" />
        <meta
          name="description"
          content="We are a software company that specializes in creating innovative and high-quality software solution."
        />
        <meta
          name="keywords"
          content="UI/UX design, Graphic design, Graphic motion, Web development, IT consulting, Marketing services, Social media marketing, AI solutions, Artificial intelligence, Machine learning, Data analytics, User experience design, User interface design, Visual design, Motion graphics, Interactive design, Front-end development, Back-end development, Full-stack development, E-commerce development, Website design, Website development, Digital marketing, Social media management, SEO services, PPC advertising, Content marketing, Branding, Identity design, Logo design, Brand strategy, Business consulting, IT solutions, Technology consulting, web"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://golden-hornet-software.vercel.app/"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="msapplication-TileImage" content="/icon-192x192.png" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#0c76c1" />

        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="128x128" href="/icon-128x128.png" />

        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#0c76c1"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:url"
          content="https://golden-hornet-software.vercel.app/"
        />
        <meta name="twitter:title" content="Golden Hornet | software Company" />
        <meta
          name="twitter:description"
          content="We are a software company that specializes in creating innovative and high-quality software solution."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/XScyCbP/logo.png"
        />
        <meta name="twitter:creator" content="@SeifSameh" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Golden Hornet | software Company" />
        <meta
          property="og:description"
          content="We are a software company that specializes in creating innovative and high-quality software solution."
        />
        <meta
          property="og:site_name"
          content="Golden Hornet | software Company"
        />
        <meta
          property="og:url"
          content="https://golden-hornet-software.vercel.app/"
        />
        <meta property="og:image" content="https://i.ibb.co/XScyCbP/logo.png" />

        {/* <!--  apple splash screen images  --> */}
        <link
          rel="apple-touch-startup-image"
          href="/icon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="apple-touch-startup-image"
          href="/icon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-startup-image"
          href="/icon-48x48.png"
          sizes="48x48"
        />
        <link
          rel="apple-touch-startup-image"
          href="/icon-72x72.png"
          sizes="72x72"
        />
        <link
          rel="apple-touch-startup-image"
          href="/icon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="apple-touch-startup-image"
          href="/icon-128x128.png"
          sizes="128x128"
        />
        <link
          rel="apple-touch-startup-image"
          href="/icon-144x144.png"
          sizes="144x144"
        />
        <link
          rel="apple-touch-startup-image"
          href="/icon-152x152.png"
          sizes="152x152"
        />
        <link
          rel="apple-touch-startup-image"
          href="/icon-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-startup-image"
          href="/icon-384x384.png"
          sizes="384x384"
        />
        <link
          rel="apple-touch-startup-image"
          href="/icon-512x512.png"
          sizes="512x512"
        />
        <meta
          name="google-site-verification"
          content="DLZONsbmLG7rnzZYuq2BZG8tiYnni9zOYZKQN95ql9w"
        />
        {/* <!-- fonts --> */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=supreme@400&f[]=technor@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
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
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 2 }}
        >
          <ServicesHeader />
          <section className="flex items-center justify-center min-h-screen overflow-hidden web-hero">
            <Parallax scale={[0, 1.5, 0, 1.5]}>
              <h1 className="min-[290px]:text-7xl md:text-9xl dark:text-white text-center">
                Web Development
              </h1>
            </Parallax>
          </section>
          <section className="overflow-hidden web-services">
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
                        Fully responsive website
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
                        Landing page
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
                        SEO package
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
                        E-commerce website
                      </h2>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffcc00] inline-flex items-center justify-center text-white relative z-10">
                      <p>5</p>
                    </div>
                    <div className="flex items-center flex-grow pl-4">
                      <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font dark:text-white">
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

export default Web;
