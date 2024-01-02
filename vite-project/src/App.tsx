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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in felis nec dolor laoreet consectetur id at diam. Donec orci quam, imperdiet id velit eu, varius suscipit diam. In suscipit neque non diam bibendum sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam elit elit, consequat quis velit vel, sodales hendrerit lectus. Nunc semper luctus tincidunt. Donec lobortis, ipsum in ultricies ullamcorper, elit leo varius sapien, at feugiat nunc ipsum quis felis. Curabitur laoreet viverra dolor, id mattis ligula condimentum sed. Duis vitae hendrerit elit, quis tincidunt tellus. Curabitur porta ultrices commodo.Duis porttitor, lacus eget efficitur tempor, libero est hendrerit risus, vel convallis metus purus in sapien. Vivamus semper, leo quis hendrerit mattis, velit dui placerat felis, eget pretium purus libero eu augue. Proin et nisi porttitor, condimentum erat in, dictum eros. Nulla facilisi. Fusce mattis leo ligula, eu posuere sapien dignissim vitae. Cras ut sem id neque tincidunt tempus vitae ac arcu. Aenean semper ex vitae sem convallis porttitor. In auctor pharetra maximus. Maecenas sit amet augue mauris. Cras ut vehicula purus. Integer fermentum tortor scelerisque porta ornare. Pellentesque eget blandit risus, vitae consectetur magna. Phasellus volutpat, nisl vitae semper vehicula, ipsum magna aliquet felis, et commodo nulla neque vitae sapien. Ut id scelerisque leo, in vehicula nulla. Nullam varius quam non nunc sodales cursus. Sed fringilla venenatis nisl, ut efficitur ipsum rhoncus vitae. Fusce lobortis sapien sed lorem rutrum malesuada. Morbi velit est, auctor eget pharetra ac, tempor at lectus. Fusce neque tortor, laoreet dignissim lobortis id, cursus id arcu. Donec congue neque in porta tincidunt.Fusce lacus lorem, accumsan quis ultricies nec, sodales eu ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet auctor ligula, sit amet consectetur nisi. Mauris ut condimentum dui, ac tempus sapien. Suspendisse interdum fringilla odio, a scelerisque nisi gravida quis. Donec porta sagittis metus eu pellentesque. Sed venenatis nisi a libero viverra, at venenatis ligula interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut eget urna sagittis, varius purus eget, porta dolor. Sed consectetur lorem et nulla pretium, non dictum orci pretium. Proin sit amet tristique lectus, et auctor massa. In placerat consequat nibh, ",
    },
  ];
  return (
    <div>
      <div>
        <Navbar navItems={navItems}></Navbar>
      </div>
      <div className="">
        <div className="p-96 bg-white w-full relative">
          <div className="bg-slate-500 absolute align-middle w-3/4 top-2/3 shadow-2xl right-[12.5%] rounded-2xl">
            <Projects projectItems={projectItems}></Projects>
          </div>
        </div>
        <div className="bg-slate-300 p-28"></div>
      </div>
      <div className="p-96 bg-slate-300"></div>
    </div>
  );
}

export default App;
