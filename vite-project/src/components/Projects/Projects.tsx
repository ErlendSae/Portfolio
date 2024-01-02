import { FC, useState } from "react";
import { ProjectItems } from "./projectitems";
import { ProjectContent } from "./ProjectContent";

export const Projects: FC<{ projectItems: ProjectItems[] }> = ({
  projectItems,
}) => {
  const [content, setContent] = useState(1);
  const base_color = "rgb(100 116 139 / var(--tw-bg-opacity))";
  const target_color = "rgb(51 65 85 / var(--tw-bg-opacity))";
  const hover_color = "rgb(30 41 59 / var(--tw-bg-opacity))";
  function handleEnterProject(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (e.currentTarget.style.backgroundColor != target_color) {
      e.currentTarget.style.backgroundColor = hover_color;
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
        childB.style.backgroundColor = base_color;
      }
    e.currentTarget.style.backgroundColor = target_color;
  }

  function handleLeaveProject(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (e.currentTarget.style.backgroundColor != target_color) {
      e.currentTarget.style.backgroundColor = base_color;
    }
  }
  return (
    <div className="text-white flex flex-col mx-auto align-middle items-center shadow-2xl rounded-full">
      <div className="rounded-full">
        {projectItems.map((item, index) => {
          if (index == 1) {
            return (
              <button
                className="h-full p-6 bg-slate-700"
                key={index}
                onMouseEnter={(e) => handleEnterProject(e)}
                onMouseLeave={(e) => handleLeaveProject(e)}
                onClick={(e) => handleClickProject(e, index)}
              >
                {item.title}
              </button>
            );
          }
          return (
            <button
              className="h-full p-6"
              key={index}
              onMouseEnter={(e) => handleEnterProject(e)}
              onMouseLeave={(e) => handleLeaveProject(e)}
              onClick={(e) => handleClickProject(e, index)}
            >
              {item.title}
            </button>
          );
        })}
      </div>

      <div className="w-full rounded-full">
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
