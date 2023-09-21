import ProjectCardPNG from "../assets/projectcard.png";

const DetailedProject = () => {
  return (
    <div className="w-full min-h-[100vh] px-10 mt-10">
      <img
        src={ProjectCardPNG}
        className="w-full rounded-lg"
        alt="project card"
      />
    </div>
  );
};

export default DetailedProject;
