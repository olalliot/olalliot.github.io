import { useState } from "react";
import "./Education.css";

const EducationBar = (props) => {
    
    const [showLabel, setShowLabel] = useState(false);
    const changeSelection = () => {
        props.setSelectionTitle(props.title, props.subtitle, props.idx)
    }

    return (
        <div className={props.className} onMouseEnter={() => setShowLabel(true)} onMouseLeave={() => setShowLabel(false)} onClick={changeSelection}>
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
    const [selection, setSelection]=  useState(0);
    const [selectionHeader, setSelectionHeader] = useState(null);

    const setSelectionTitle = (title, subtitle, idx) => {
        setSelection(idx);
        setSelectionHeader(`▼ ${title} - ${subtitle}`)
    }
    const educationEntries = [
        ["▸ Obtained Bacclauréat S OIB Option with Mention Très Bien (highest honors)", "▸ Passed iGCSE in 2015 with A avg.", "▸ Passed the HSK 3", "▸ Member of the Coding Club", "▸ Started programming in 2012"],
        ["▸ Obtained B.S in Computer Science with 3.4 GPA", "▸ As part of CS major, took UX Design, CyberSecurity, and Web Design electives", "▸ Received social & community prize for Capstone (see more in Projects tab)", "▸ Selected to final round for entrepreneurship project in 2nd semester of Junior year (see more in projects)"],
        ["▸ Tentative plans to one day pursue a Masters in CS (blockchain or cybersecurity most likely), possibly MBA as well"]
    ];

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
                        <div className="educationStorageImg">
                            <img alt="Octave Education Storage icon" src="/icons/backpack.png" className="educationStorageIcon"/>
                        </div>
                        <div className="educationStorageBarContainer">
                            <p className="educationStorageExplanation">Click on one of the segments to see more details. Hover over a segment to see the location and duration of that segment.</p>
                            <div className="educationStorageBar">
                                <EducationBar className={"educationStorageBarParis"} title={"Paris"} subtitle={"2012-2016"} idx={0} setSelectionTitle={setSelectionTitle}/>
                                <EducationBar className={"educationStorageBarMich"} title={"Michigan"} subtitle={"2016-2020"} idx={1} setSelectionTitle={setSelectionTitle}/>
                                <EducationBar className={"educationStorageBarRemaining"} title={"TBD"} subtitle={"???"} idx={2} setSelectionTitle={setSelectionTitle}/>
                            </div>
                        </div>
                </div>
                <div className="educationStorageDetails">
                    <div className={selectionHeader ? "educationBarElementTitle" : "hidden"}>
                        <h4>{selectionHeader}</h4>
                        {educationEntries[selection].map((e, idx) => {
                            return(
                                <p key={`item-${idx}`}>{e}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;