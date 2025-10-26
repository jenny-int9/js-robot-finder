import "./App.css";
import Robots from "./data/data";
import RobotCard from "./components/RobotCard";

function App() {
  return (
    <div className="App">
      <h1>Robot Finder</h1>

      <div className="robot-list">
        {Robots.map((robot) => (
          <RobotCard key={robot.id} robot={robot} />
        ))}
      </div>
    </div>
  );
}

export default App;
