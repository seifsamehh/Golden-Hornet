import { useHeroData } from "../hooks/useHeroData";
import { Parallax } from "react-scroll-parallax";
import logo from "../assets/icon-512x512.webp";
import "../styles/hero.scss";
const Hero = () => {
  const { status, data, error } = useHeroData();

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-12 data-loading">
        <img src={logo} alt="logo" width={150} height={150} />
        <h1 className="text-4xl dark:text-white">Please wait....</h1>
      </div>
    );
  }

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      {/* desktop */}
      <Parallax translateY={["300px", "-100px"]}>
        <section
          className="md:flex flex-col items-center justify-center min-h-screen gap-5 overflow-hidden heroo desktop min-[290px]:hidden"
          id="heroo"
        >
          <Parallax scale={[0, 1.5, 0, 1.5]}>
            <h1 className="min-[290px]:text-6xl md:text-8xl dark:text-white text-center">
              {data.title} {""}
              <span className="text-[#ffcc00]">Golden Hornet</span>
            </h1>
          </Parallax>
          <h3 className="min-[290px]:text-4xl md:text-6xl text-[#0f75bd] text-center">
            {data.subtitle}
          </h3>
          <Parallax
            translateX={["1100px", "-200px"]}
            translateY={["0px", "200px"]}
            className="tooltip tooltip-open tooltip-info desktop min-[290px]:hidden md:block"
            data-tip="Hi !"
          >
            <img src={data.image} alt="robot" width={100} height={100} />
          </Parallax>
          <Parallax
            translateX={["300px", "-200px"]}
            translateY={["0px", "200px"]}
            className="tooltip tooltip-open tooltip-info mobile min-[290px]:block md:hidden"
            data-tip="Hi !"
          >
            <img src={data.image} alt="robot" width={100} height={100} />
          </Parallax>
        </section>
      </Parallax>
      {/* mobile */}
      <section
        className="min-[290px]:flex flex-col items-center justify-center min-h-screen gap-5 overflow-hidden heroo mobile md:hidden"
        id="heroo"
      >
        <Parallax scale={[0, 2, 0, 2]}>
          <h1 className="min-[290px]:text-6xl md:text-8xl dark:text-white text-center">
            {data.title} {""}
            <span className="text-[#ffcc00]">Golden Hornet</span>
          </h1>
        </Parallax>
        <h3 className="min-[290px]:text-4xl md:text-6xl text-[#0f75bd] text-center">
          {data.subtitle}
        </h3>
        <Parallax
          translateX={["1100px", "-200px"]}
          translateY={["0px", "200px"]}
          className="tooltip tooltip-open tooltip-info desktop min-[290px]:hidden md:block"
          data-tip="Hi !"
        >
          <img src={data.image} alt="robot" width={100} height={100} />
        </Parallax>
        <Parallax
          translateX={["300px", "-200px"]}
          translateY={["0px", "200px"]}
          className="tooltip tooltip-open tooltip-info mobile min-[290px]:block md:hidden"
          data-tip="Hi !"
        >
          <img src={data.image} alt="robot" width={100} height={100} />
        </Parallax>
      </section>
    </>
  );
};

export default Hero;
