// import dir from "../assets/dir.webp";
// import pathfinder from "../assets/pathfinder.webp";
import { usePartnerData } from "../hooks/usePartnerData";
import logo from "../assets/icon-512x512.webp";
import "../styles/partners.scss";
const Partners = () => {
  const { status, data, error } = usePartnerData();

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
      className="flex items-center justify-around gap-6 py-12 overflow-hidden partners min-[290px]:flex-wrap md:flex-nowrap min-[290px]:px-4 md:px-0"
      id="partners"
    >
      <div className="partners-content">
        {data.map((partner) => (
          <div key={partner._id}>
            <h1 className="text-3xl dark:text-white">{partner.title}</h1>
            <p className="dark:text-white">{partner.paragraph}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-6 partners-images">
        {data.map((partner) => (
          <div
            key={partner._id}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {partner.images.map((image, index) => (
              <a
                key={index}
                href={partner.links[index]}
                target="_blank"
                rel="noreferrer"
                aria-label="social media account"
              >
                <img
                  key={image._id}
                  src={image}
                  alt="partner"
                  className="rounded-[50%]"
                  width={120}
                  height={120}
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
