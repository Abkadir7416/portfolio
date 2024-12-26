import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
const About = () => {
  return (
    <div className="mt-20">
      <h1 className="my-20 text-center text-4xl ">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <p className="text-center text-2xl">{ABOUT_TEXT}</p>

      {/* <div className="flex flex-wrap"> */}
        {/* <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="about" className="rounded-2xl" />
          </div>
        </div> */}
        {/* <div className="w-full lg:w-1/2"> */}
          {/* <div className="flex justify-center lg:justify-start"> */}
            {/* <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p> */}
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default About;
