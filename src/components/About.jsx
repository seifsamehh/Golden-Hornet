import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import logo from "../assets/icon-512x512.webp";
import "../styles/about.scss";

const About = () => {
  const handleClickScroll1 = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      className="flex min-[290px]:flex-wrap md:flex-nowrap items-center justify-center min-h-screen min-[290px]:px-4 md:px-12 overflow-hidden about-us min-[290px]:pt-6 md:pt-0 min-[290px]:gap-6 md:gap-0"
      id="about-us"
    >
      <div className="left min-[290px]:flex md:block min-[290px]:flex-col">
        <Parallax opacity={[0, 2]}>
          <p className="mb-6 text-3xl leading-8 dark:text-white min-[290px]:mt-20 md:mt-0 min-[290px]:text-center md:text-left">
            We are a software company that specializes in creating innovative
            and high-quality software solutions. Our team of experienced
            professionals utilizes the latest technologies and industry best
            practices to deliver software products that meet the unique needs
            and requirements of our clients.
          </p>
        </Parallax>
        <button onClick={handleClickScroll1}>Explore More</button>
      </div>
      <div className="flex justify-center w-full right">
        <motion.img
          src={logo}
          alt="logo"
          width={200}
          height={200}
          loading="lazy"
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 200 }}
        />
      </div>
    </section>
  );
};

export default About;
