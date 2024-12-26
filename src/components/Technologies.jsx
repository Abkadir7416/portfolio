import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaJsSquare } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800">
          <RiReactjsLine className="text-9xl p-4 text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800">
          <TbBrandNextjs className="text-9xl p-4" />
        </div>

        {/* <div className="rounded-2xl border-4 border-neutral-800">
                <DiRedis className="text-9xl p-4 text-red-700" />
            </div> */}
        <div className="rounded-2xl border-4 border-neutral-800">
          <FaJsSquare className="text-9xl p-4 text-yellow-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800">
          <SiTypescript className="text-9xl p-4 text-blue-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800">
          <FaNodeJs className="text-9xl p-4 text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800">
          <BiLogoPostgresql className="text-9xl p-4 text-sky-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800">
          <SiMongodb className="text-9xl p-4 text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800">
          <SiCplusplus className="text-9xl p-4 text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
