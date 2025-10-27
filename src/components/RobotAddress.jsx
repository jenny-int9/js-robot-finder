const RobotAddress = ({address}) => (
    <div className="robot-address">
        <p>{address.suite}</p>
        <p>{address.zipcode}</p>
        <p>{address.city}</p>
    </div>
);

export default RobotAddress;