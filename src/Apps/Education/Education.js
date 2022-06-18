import { useState } from "react";
import "./Education.css";

const EducationBar = (props) => {
    
    const [showLabel, setShowLabel] = useState(false);

    return (
        <div className={props.className} onMouseEnter={() => setShowLabel(true)} onMouseLeave={() => setShowLabel(false)}>
            <div className={showLabel ? "educationBarElementLabelContainer" : "hidden"}>
                <div className="educationBarElementLabel">
                    <p className="educationBarElementTitle">{props.title}</p>
                    <p className="educationBarElementSubtitle">{props.subtitle}</p>
                </div>
                <div className="bottomCarat"/>
            </div>
        </div>
    )
}

const Education = (props) => {

    const {isSelected} = props;

    const bringToFront = () => {
        props.updateOrder("Education");
    }

    const closeEducation = () => {
        props.closeWindow("Education");
    }

    return (
        <div className={isSelected ? "educationContainer" : "hidden"} style={{zIndex: props.order}} onClick={() => bringToFront()}>
            <div className="educationHeader">
                <div className="browserButtons">
                    <div className="closedButton" onClick={() => closeEducation()}/>
                    <div className="headerButton" />
                    <div className="headerButton" />
                </div>
            </div>
            <div className="educationContent">
                <div className="educationStorageDisplay">
                    <p className="educationStorageExplanation">Click on one of the segments to see more details. Hover over a segment to see the location and duration of that segment.</p>
                    <div className="educationStorageBar">
                        <EducationBar className={"educationStorageBarParis"} title={"Paris"} subtitle={"2012-2016"}/>
                        <EducationBar className={"educationStorageBarMich"} title={"Michigan"} subtitle={"2016-2020"}/>
                        <EducationBar className={"educationStorageBarRemaining"} title={"TBD"} subtitle={"???"}/>
                    </div>
                </div>
                <div className="educationStorageDetails">

                </div>
            </div>
        </div>
    );
}

export default Education;