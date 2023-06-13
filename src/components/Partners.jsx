import dir from "../assets/dir.webp";
import pathfinder from "../assets/pathfinder.webp";
import "../styles/partners.scss";
const Partners = () => {
  return (
    <section
      className="flex items-center justify-around gap-6 py-12 overflow-hidden partners min-[290px]:flex-wrap md:flex-nowrap min-[290px]:px-4 md:px-0"
      id="partners"
    >
      <div className="partners-content">
        <h1 className="text-3xl dark:text-white">OUR HAPPY PARTNERS</h1>
        <p className="dark:text-white">
          We are happy to introduce our partners in business.
        </p>
      </div>
      <div className="flex items-center justify-center gap-6 partners-images">
        <a
          href="https://www.facebook.com/diragencies"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={dir}
            alt="dir"
            className="dir rounded-[50%]"
            width={120}
            height={120}
            loading="lazy"
          />
        </a>
        <a
          href="https://www.facebook.com/pathfindereeg"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={pathfinder}
            alt="pathfinder"
            className="pathfinder"
            width={120}
            height={120}
            loading="lazy"
          />
        </a>
      </div>
    </section>
  );
};

export default Partners;
