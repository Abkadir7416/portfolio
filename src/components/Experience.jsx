import { EXPERIENCES } from "../constants";
const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center text-xl">
            <div className="w-full lg:w-1/4">
              <p className="">{experience.year} </p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-lg text-purple-100">
                    {experience.company}
                </span>
              </h6>
              <p className=""></p>
              {experience.technologies.map((tech, index) =>(
                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-lg font-medium text-purple-800" >{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
