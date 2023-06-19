import { useServicesData } from "../hooks/useServiceData";
import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import logo from "../assets/icon-512x512.webp";
import "../styles/services.scss";

const Services = () => {
  const { status, data, error } = useServicesData();

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
        {data?.map((service) => {
          return (
            <Parallax opacity={[0, 2]} key={service._id}>
              <div className="box">
                <h2 className="text-2xl">{service.title}</h2>
                <p>{service.description}</p>
                <Link to={service.link} aria-label={service.title}>
                  <button>For More</button>
                </Link>
              </div>
            </Parallax>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
