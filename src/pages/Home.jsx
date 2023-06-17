import { lazy, Suspense } from "react";
import { Footer, Header, Hero } from "../components";
import { Helmet } from "react-helmet-async";

const About = lazy(() => import("../components/About"));
const Services = lazy(() => import("../components/Services"));
const Team = lazy(() => import("../components/Team"));
const Partners = lazy(() => import("../components/Partners"));
const Courses = lazy(() => import("../components/Courses"));
const Meeting = lazy(() => import("../components/Meeting"));
const Support = lazy(() => import("../components/Support"));
const Loader = () => {
  <div className="flex flex-col items-center justify-center gap-5">
    <h1>Please Wait One Minute...</h1>
    <span className="loading loading-spinner text-success"></span>
  </div>;
};

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <title>Golden Hornet | Software Company</title>
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
      <Header />
      <Hero />
      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Services />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Team />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Partners />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Courses />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Meeting />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Support />
      </Suspense>
      <Footer />
    </>
  );
};

export default Home;
