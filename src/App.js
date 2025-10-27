import "./App.css";
import { useState } from "react";
import Robots from "./data/data";
import RobotCard from "./components/RobotCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [userInput, setUserInput] = useState("");

  const filtered = Robots.filter((robot) =>
    robot.name.toLowerCase().includes(userInput.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Robot Finder</h1>

      <SearchBar setUserInput={setUserInput} userInput={userInput} />

      <div className="robot-list">
        {filtered.map((robot) => (
          <RobotCard key={robot.id} robot={robot} />
        ))}
      </div>
    </div>
  );
}

export default App;
