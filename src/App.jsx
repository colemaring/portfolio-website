import "./App.css";
import ProjectShowcase from "./components/ProjectShowcase";
import HeaderAndButtons from "./components/HeaderAndButtons";
import stadium from "./assets/stadium.jpg";

function App() {
  return (
    <div id="content">
      <HeaderAndButtons />
      <img id="stadiumpic" src={stadium} alt="UCF stadium" />
      <div className="center">
        <h1 className="heavyMono">Projects</h1>
      </div>
      <ProjectShowcase />
      <div id="footer" className="lightSans">
        Up to date, April 2025
      </div>
    </div>
  );
}

export default App;
