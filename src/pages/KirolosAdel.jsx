import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { Helmet } from "react-helmet-async";
import kero from "../assets/kero.webp";
import neon4 from "../assets/nnneon4.svg";
import logo from "../assets/icon-512x512.webp";
import { Footer, TeamHeader } from "../components";
import "../styles/teamMembers.scss";
const KirolosAdel = () => {
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
        <title>Kirolos Adel</title>
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
          <TeamHeader />
          <section className="mohamed min-h-screen flex justify-center items-center overflow-hidden min-[290px]:flex-wrap md:flex-nowrap px-4">
            <div className="w-full left">
              <Parallax
                translateY={["100px", "-100px"]}
                className="tooltip tooltip-open tooltip-info"
                data-tip="Hi! I'm Kirolos Adel"
              >
                <img src={kero} alt="kirolos adel" width={200} height={200} />
              </Parallax>
            </div>
            <div className="relative right">
              <Parallax translateY={["100px", "-100px"]}>
                <h1 className="min-[290px]:text-4xl md:text-7xl min-[290px]:text-center md:text-left text-[#0f74bd]">
                  KIROLOS ADEL
                </h1>
              </Parallax>
              <p className="leading-8 dark:text-white min-[290px]:text-center md:text-left">
                Kirolos Adel is a talented and experienced technology
                professional who currently serves as the Chief Creative Officer
                (CCO) and Head of Design Team for a company. With years of
                experience in the design industry, Kirolos is known for his
                expertise in graphic design, user experience design, and
                branding.
              </p>
              <p className="my-6 leading-8 dark:text-white min-[290px]:text-center md:text-left">
                As the CCO and Head of Design Team, Kirolos is responsible for
                overseeing the company&apos;s design projects and ensuring that
                they meet the highest standards of quality and creativity. He
                works closely with other departments to identify design needs
                and develop strategies to meet those needs.
              </p>
              <p className="leading-8 dark:text-white min-[290px]:text-center md:text-left">
                One of Kirolos&apos;s key strengths is his ability to create
                visually stunning and effective designs. He is an expert in
                graphic design software and is passionate about creating designs
                that are both aesthetically pleasing and functional. His designs
                have helped the company to stand out from its competitors and
                have contributed to its success.
              </p>
              <Parallax rotate={[0, 45]}>
                <img
                  src={neon4}
                  alt="neon"
                  width={400}
                  height={400}
                  className="absolute min-[290px]:hidden md:block"
                />
              </Parallax>
              <Parallax rotate={[0, 360]}>
                <img
                  src={neon4}
                  alt="neon"
                  width={400}
                  height={400}
                  className="absolute min-[290px]:block md:hidden"
                />
              </Parallax>
            </div>
          </section>
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default KirolosAdel;
