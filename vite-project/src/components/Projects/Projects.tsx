import { ButtonHTMLAttributes, FC, useState } from "react";
import { Bilder, ProjectItems } from "./projectitems";
import { Slideshow } from "./Slideshow";

const ProjectContent: FC<{
  title: string;
  url: string;
  text: string;
  bilder: Bilder[];
}> = (projectItem) => {
  return (
    <div className="p-6 align-middle text-center bg-slate-700 w-full">
      <div>
        {projectItem.url}
        {projectItem.text}
        <img src={projectItem.bilder[0].link} alt="" />
      </div>
      {/* <Slideshow images={projectItem.bilder}></Slideshow> */}
    </div>
  );
};

export const Projects: FC<{ projectItems: ProjectItems[] }> = ({
  projectItems,
}) => {
  const [content, setContent] = useState(0);
  function handleEnterProject(
    e: React.MouseEvent<HTMLButtonElement>,
    key: number
  ) {
    e.preventDefault();
    if (
      e.currentTarget.style.backgroundColor !=
      "rgb(51 65 85 / var(--tw-bg-opacity))"
    ) {
      e.currentTarget.style.backgroundColor =
        "rgb(30 41 59 / var(--tw-bg-opacity))";
    }
  }
  function handleClickProject(
    e: React.MouseEvent<HTMLButtonElement>,
    key: number
  ) {
    e.preventDefault();
    setContent(key);
    if (e.currentTarget.parentElement)
      for (const child of e.currentTarget.parentElement.children) {
        let childB = child as HTMLButtonElement;
        childB.style.backgroundColor =
          "rgb(100 116 139 / var(--tw-bg-opacity))";
      }
    e.currentTarget.style.backgroundColor =
      "rgb(51 65 85 / var(--tw-bg-opacity))";
  }

  function handleLeaveProject(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (
      e.currentTarget.style.backgroundColor !=
      "rgb(51 65 85 / var(--tw-bg-opacity))"
    ) {
      e.currentTarget.style.backgroundColor =
        "rgb(100 116 139 / var(--tw-bg-opacity))";
    }
  }
  return (
    <div className="text-white flex flex-col mx-auto align-middle items-center">
      <div>
        {projectItems.map((item, index) => {
          return (
            <button
              className="h-full p-6"
              key={index}
              onMouseEnter={(e) => handleEnterProject(e, index)}
              onMouseLeave={(e) => handleLeaveProject(e)}
              onClick={(e) => handleClickProject(e, index)}
            >
              {item.title}
            </button>
          );
        })}
      </div>

      <div>
        <ProjectContent
          title={projectItems[content].title}
          url={projectItems[content].url}
          text={projectItems[content].text}
          bilder={projectItems[content].bilder}
        ></ProjectContent>
      </div>
    </div>
  );
};
