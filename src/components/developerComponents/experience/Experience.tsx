import { professionalExperience } from "@/data/professionExperience";
import Link from "next/link";

export const Experience = () => {
  return (
    <div className="my-40">
      <div className="mx-2 w-4/5 max-w-screen-md lg:max-w-screen-lg relative left-1/2 -translate-x-1/2">
        <div className="relative left-0">
          <div className="my-4 text-xl md:text-3xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shaoPink to-shaoOrange">
              PROFESSIONAL EXPERIENCE
            </span>
            <div className="my-8 flex flex-col">
              {professionalExperience.map((experience) => {
                return (
                  <div className="my-4 w-auto max-w-5xl text-shaoWhite" key={experience.company}>
                    <div className="flex justify-start items-center">
                      <div className="hidden lg:mr-2 lg:w-1/4 lg:flex flex-col justify-start items-center">
                        <div className="flex flex-col justify-start items-center text-base font-extralight">
                          {experience.endDate.toUpperCase()}
                          <div className="mt-2 w-2 h-2 rounded bg-shaoPink"></div>
                        </div>
                        <div className="h-[200px] w-px bg-gradient-to-r from-shaoPink to-shaoOrange"></div>
                        <div className="flex flex-col justify-start items-center text-base font-extralight">
                          <div className="mb-2 w-2 h-2 rounded bg-shaoOrange"></div>
                          {experience.startDate.toUpperCase()}
                        </div>
                      </div>
                      <div className="lg:w-3/4 ">
                        <div className="text-base md:text-xl font-normal">
                          <Link
                            href={experience.companyWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-shaoPink hover:to-shaoOrange"
                          >
                            {experience.company.toUpperCase()}
                          </Link>
                        </div>
                        <div className="lg:hidden text-xs md:text-sm font-extralight text-shaoWhite">
                          {"AUG 2022"} - {"PRESENT"}
                        </div>
                        <div className="mt-2 text-xs md:text-sm font-extralight">
                          {experience.title.toUpperCase()}
                        </div>
                        <div className="my-4 text-sm md:text-base font-extralight">
                          {experience.description}
                        </div>
                        <div className="flex flex-wrap justify-start items-center">
                          {experience.techUsed.map((tech) => {
                            return (
                              <div className="mr-2 my-1 p-2 text-sm font-light rounded bg-gradient-to-r from-shaoPink to-shaoOrange" key={tech}>
                                {tech.toUpperCase()}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
