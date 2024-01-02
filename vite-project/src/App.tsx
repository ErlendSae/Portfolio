import "./App.css";
import { ProjectItems } from "./components/Projects/projectitems";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects/Projects";
function App() {
  const navItems = ["Home", "Projects", "About Me"];
  const projectItems: ProjectItems[] = [
    {
      title: "Portfolio",
      url: "",
      bilder: [
        {
          alttext: "",
          link: "",
        },
      ],
      text: "string",
    },
    {
      title: "Sillie Art",
      url: "https://folk.ntnu.no/erlenlsa/webtek-prosjekt/HTML/ ",
      bilder: [
        {
          alttext: "Hjemside",
          link: "src/assets/projects/sillie/hjemside-sillie.png",
        },
        {
          alttext: "Hjemside Scrollet",
          link: "src/assets/projects/sillie/hjemside-2-sillie.png",
        },
        {
          alttext: "Galleri",
          link: "src/assets/projects/sillie/galleri-sillie.png",
        },
        {
          alttext: "Utstillinger",
          link: "src/assets/projects/sillie/utstillinger-sillie.png",
        },
      ],
      text: "string",
    },
    {
      title: "Workoutplanner",
      url: "https://che.stud.ntnu.no/#https://gitlab.stud.idi.ntnu.no/it1901/groups-2023/gr2307/gr2307.git?new",
      bilder: [
        {
          alttext: "Exercises",
          link: "src/assets/projects/workout/exercise-workout.png",
        },
        {
          alttext: "Hjemside",
          link: "src/assets/projects/workout/hjemside-workout.png",
        },
        {
          alttext: "Overview",
          link: "src/assets/projects/workout/overview-workout.png",
        },
        {
          alttext: "Workouts",
          link: "src/assets/projects/workout/workoutview-workout.png",
        },
      ],
      text: "string",
    },
  ];
  return (
    <>
      <div></div>
      <Navbar navItems={navItems}></Navbar>
      <div className="p-6"></div>
      <div className="bg-slate-500 flex">
        <Projects projectItems={projectItems}></Projects>
      </div>
    </>
  );
}

export default App;
