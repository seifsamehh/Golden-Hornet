import mohamed from "../assets/mohamed.webp";
import eyad from "../assets/eyad.webp";
import seif from "../assets/seif.webp";
import kero from "../assets/kero.webp";
import yassmin from "../assets/yassmin.webp";
import "../styles/team.scss";
import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";

const Team = () => {
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
          <div className="box">
            <div className="image">
              <img
                src={mohamed}
                alt="mohamed reda"
                width={100}
                height={100}
                loading="lazy"
              />
            </div>
            <div className="content">
              <h2>MOHAMED REDA</h2>
              <h3 className="mb-2">CEO , CFO</h3>
              <Link to="/mohamed-reda">For More</Link>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img
                src={eyad}
                alt="Eyad Ayman"
                width={100}
                height={100}
                loading="lazy"
              />
            </div>
            <div className="content">
              <h2>EYAD AYMAN</h2>
              <h3 className="mb-2">CTO, HEAD OF AI TEAM</h3>
              <Link to="/eyad-ayman">For More</Link>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img
                src={seif}
                alt="Seif Eldin Sameh"
                width={100}
                height={100}
                loading="lazy"
              />
            </div>
            <div className="content">
              <h2>SEIF ELDIN SAMEH</h2>
              <h3 className="mb-2">COO, HEAD OF WEB TEAM</h3>
              <Link to="/seif-eldin-sameh">For More</Link>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img
                src={kero}
                alt="Kero"
                width={100}
                height={100}
                loading="lazy"
              />
            </div>
            <div className="content">
              <h2>KIROLOS ADEL</h2>
              <h3 className="mb-2">CCO, HEAD OF DESIGN TEAM</h3>
              <Link to="/kirolos-adel">For More</Link>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img
                src={yassmin}
                alt="yassmin"
                width={100}
                height={100}
                loading="lazy"
              />
            </div>
            <div className="content">
              <h2>YASSMIN</h2>
              <h3 className="mb-2">HEAD OF MARKETING TEAM</h3>
              <Link to="/yassmin">For More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
