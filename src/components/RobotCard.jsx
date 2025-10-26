import "./RobotCard.css";
import RobotAdress from "./RobotAdress";

const RobotCard = ({robot}) => 
<div className="robot-card">
    <h2>{robot.name} {robot.username}</h2>
        <ul>
        <li> {robot.phone} </li>
        <li> {robot.email} </li>
        <li>{robot.website}</li>
        </ul>
</div>

export default RobotCard;