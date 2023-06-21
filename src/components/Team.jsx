import mohamed from "../assets/mohamed.webp";
// import eyad from "../assets/eyad.webp";
// import seif from "../assets/seif.webp";
// import kero from "../assets/kero.webp";
// import yassmin from "../assets/yassmin.webp";
import { useTeamData } from "../hooks/useTeamData";
import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import logo from "../assets/icon-512x512.webp";
import "../styles/team.scss";

const Team = () => {
  const { status, data, error } = useTeamData();

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
      className="flex flex-col items-center justify-center min-h-screen gap-12 py-6 overflow-hidden team"
      id="team"
    >
      <div className="mx-20 up">
        <Parallax translateX={["-50px", "0px"]}>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={mohamed} alt="mohamed reda" loading="lazy" />
              </div>
            </div>
            <div className="chat-header dark:text-white">
              Mohamed Reda ( CEO )
              <time className="ml-1 text-xs opacity-50 dark:text-white">
                12:45
              </time>
            </div>
            <div className="chat-bubble chat-bubble-info">Hey Team</div>
            <div className="opacity-50 chat-footer dark:text-white">
              Delivered
            </div>
          </div>
        </Parallax>
        <Parallax translateX={["0px", "-50px"]}>
          <div className="chat chat-end">
            <div className="chat-header dark:text-white">
              Team
              <time className="ml-1 text-xs opacity-50 dark:text-white">
                12:46
              </time>
            </div>
            <div className="chat-bubble chat-bubble-success">
              Yes Mr Mohamed
            </div>
            <div className="opacity-50 chat-footer dark:text-white">
              Seen at 12:46
            </div>
          </div>
        </Parallax>
        <Parallax translateX={["-50px", "0px"]}>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={mohamed} alt="mohamed reda" loading="lazy" />
              </div>
            </div>
            <div className="chat-header dark:text-white">
              Mohamed Reda ( CEO )
              <time className="ml-1 text-xs opacity-50 dark:text-white">
                12:47
              </time>
            </div>
            <div className="chat-bubble chat-bubble-info">
              Let the people know who we are
            </div>
            <div className="opacity-50 chat-footer dark:text-white">
              Delivered
            </div>
          </div>
        </Parallax>
        <Parallax translateX={["0px", "-50px"]}>
          <div className="chat chat-end">
            <div className="chat-header dark:text-white">
              Team
              <time className="ml-1 text-xs opacity-50 dark:text-white">
                12:48
              </time>
            </div>
            <div className="chat-bubble chat-bubble-success">
              Let&apos;s gooo
            </div>
            <div className="opacity-50 chat-footer dark:text-white">
              Seen at 12:48
            </div>
          </div>
        </Parallax>
      </div>
      <div className="down">
        <div className="flex items-center justify-center gap-4 px-4 boxs min-[290px]:flex-wrap md:flex-nowrap">
          {data?.map((team) => {
            return (
              <div className="box" key={team._id}>
                <div className="image">
                  <img
                    src={team.image}
                    alt={team.title}
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                </div>
                <div className="content">
                  <h2>{team.title}</h2>
                  <h3 className="mb-2">{team.subtitle}</h3>
                  <Link to={team.link}>For More</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
