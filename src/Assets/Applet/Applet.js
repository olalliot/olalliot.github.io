import { useState } from "react";
import "./Applet.css";

const Applet = (props) => {

    const {isSelected, label} = props;
    const [showLabel, setShowLabel] = useState(false);

    const selectApplet = () => {
        props.showWindow(props.target);
    };

    return (
        <div
            className={isSelected ? "appletContainerSelected" : "appletContainer"}
            onClick={() => selectApplet()}
            onMouseEnter={() => setShowLabel(true)}
            onMouseLeave={() => setShowLabel(false)}
        >
            <div className={showLabel ? "appletText" : "hidden"}>
                <p>{label}</p>
            </div>
            <img alt="App Icon" src={props.src} className={isSelected ? "appletIconSelected" : "appletIcon"}/>
            <div className={isSelected ? "selectedDot" : "hidden"} />
        </div>
    );
}

export default Applet;