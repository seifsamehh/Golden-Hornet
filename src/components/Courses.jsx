import "../styles/courses.scss";
const Courses = () => {
  return (
    <section
      className="courses min-h-[50vh] flex justify-center items-center overflow-hidden py-12"
      id="courses"
    >
      <h1 className="text-center md:w-1/2 min-[290px]:text-2xl md:text-3xl dark:text-white min-[290px]:px-2 md:px-0">
        Hey! We are not only can help you make your own software but we can also
        help you to learn Web development, AI, UI / UX, and more is coming. Stay
        Tuned for our course plan for each technology.
      </h1>
    </section>
  );
};

export default Courses;
