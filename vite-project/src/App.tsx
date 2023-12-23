import "./App.css";
import { Navbar } from "./components/Navbar";
function App() {
  const navItems = [
    "Home",
    "Projects",
    "About Me"
  ]
  return (
    <>
      <div></div>
      <Navbar navItems={navItems}></Navbar>
      <div className="card"></div>
    </>
  );
}

export default App;
