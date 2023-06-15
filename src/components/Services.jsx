import { Parallax } from "react-scroll-parallax";
import "../styles/services.scss";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen gap-12 overflow-hidden services min-[290px]:py-6 md:py-0"
      id="services"
    >
      <Parallax translateY={["0px", "-150px"]}>
        <h1 className="min-[290px]:text-4xl md:text-8xl dark:text-white min-[290px]:mt-16 md:mt-0">
          What We Can Do
        </h1>
      </Parallax>
      <div className="flex items-center justify-center gap-4 px-4 boxs min-[290px]:flex-wrap md:flex-nowrap">
        <Parallax opacity={[0, 2]}>
          <div className="box">
            <h2 className="text-2xl">WEB DEVELOPMENT</h2>
            <p>
              Web development is the process of creating websites, web
              applications, and other web-based solutions that can be accessed
              through the internet. The process involves designing, building,
              and maintaining websites, with a focus on creating engaging user
              experiences and functionality.
            </p>
            <Link to="/web-development" aria-label="web">
              <button>For More</button>
            </Link>
          </div>
        </Parallax>
        <Parallax opacity={[0, 2]}>
          <div className="box">
            <h2 className="text-2xl">DESIGN</h2>
            <p>
              The design department in a our company is responsible for creating
              visually appealing and user-friendly interfaces for software
              applications. Designers work closely with developers, product
              managers, and stakeholders to understand user needs and design
              solutions that meet those needs.
            </p>
            <Link to="/design" aria-label="design">
              <button>For More</button>
            </Link>
          </div>
        </Parallax>
        <Parallax opacity={[0, 2]}>
          <div className="box">
            <h2 className="text-2xl">AI</h2>
            <p>
              The integration of AI and web development involves using
              AI-powered tools to enhance the functionality and performance of
              websites. This integration allows for personalized user
              experiences, instant customer support, optimized websites for
              voice search, and predictive analytics, among other benefits.
            </p>
            <Link to="/ai" aria-label="ai">
              <button>For More</button>
            </Link>
          </div>
        </Parallax>
        <Parallax opacity={[0, 2]}>
          <div className="box">
            <h2 className="text-2xl">DIGITAL MARKETING</h2>
            <p>
              Marketing and social media are two closely related concepts that
              are critical to the success of many businesses today. Marketing
              refers to the process of promoting, selling, and distributing
              products or services to a target audience. Social media, on the
              other hand, refers to the online platforms and tools that allow
              individuals and businesses to create and share content, build
              relationships, and engage with their audiences.
            </p>
            <Link to="/digital-marketing" aria-label="digital marketing">
              <button>For More</button>
            </Link>
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default Services;
