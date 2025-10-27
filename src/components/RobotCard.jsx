import "./RobotCard.css";
import { useState } from "react";
import RobotAddress from "./RobotAddress";


const RobotCard = ({robot}) => {
const [display, setDisplay] = useState(false);

return (
    <div className="robot-card">
        <img src={`https://robohash.org/${robot.id}?set=set2`} alt={robot.name}/>
        <h2>{robot.name} {robot.username}</h2>
        <ul>
            <li> {robot.phone} </li>
            <li> {robot.email} </li>
            <li>{robot.website}</li>
        </ul>

        <button type="button" onClick={() => setDisplay(!display)}>
            {display ? "- Hide Address" : "+ Address"}
        </button>

        {display && <RobotAddress address={robot.address} />}
    </div> )};

export default RobotCard;