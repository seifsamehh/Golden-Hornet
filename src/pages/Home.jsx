import { lazy, Suspense } from "react";
import { Footer, Header, Hero } from "../components";

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
