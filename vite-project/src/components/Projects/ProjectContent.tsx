import { FC } from "react";
import { Bilder } from "./projectitems";
import { Slideshow } from "./Slideshow";

export const ProjectContent: FC<{
  title: string;
  url: string;
  text: string;
  bilder: Bilder[];
}> = (projectItem) => {
  return (
    <div className="rounded-b-2xl grid grid-cols-2 relative flex-row w-full gap-12 py-12 justify-items-center bg-slate-700 shadow-inner">
      <div className="ml-8 py-12">
        <img
          className="max-w-md rounded-2xl"
          src={projectItem.bilder[0].link}
          alt=""
        />
        <a
          className="underline underline-offset-2 text-blue-400"
          href={projectItem.url}
        >
          visit project
        </a>
      </div>
      <div className="py-12 mx-9">
        <h1 className="text-6xl my-4">{projectItem.title}</h1>
        <p className="">{projectItem.text}</p>
      </div>
      {/* <Slideshow images={projectItem.bilder}></Slideshow> */}
    </div>
  );
};
