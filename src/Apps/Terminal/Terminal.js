import "./Terminal.css";
import { useState, useRef, useEffect } from "react";
import UserCommand from "./Sections/UserCommand";
import About from "./Sections/About";
import Specs from "./Sections/Specs";
import Help from "./Sections/Help";
import Unknown from "./Sections/Unknown";

const Terminal = (props) => {

    const {isSelected} = props;
    const inputRef = useRef(null);
    const textFieldRef = useRef(null);
    const [sections, setSections] = useState([<UserCommand command="About"/>, <About />, <UserCommand command="Specs"/>, <Specs />, <><br/><p>------------------------------------------</p><p>Enter "help" below to see all commands</p></>]);
    const [userInput, setUserInput] = useState("");

    const closeTerminal = () => {
        props.closeWindow("Terminal");
    }

    const bringToFront = () => {
        props.updateOrder("Terminal");
    }

    useEffect(() => { // This is to auto focus the text field
        if (textFieldRef.current) {
            textFieldRef.current.focus();
        }
    }, [])

    useEffect(() => { //This is what scrolls the div to bottom after a user entry
        if (inputRef.current) {
            inputRef.current.scrollIntoView();
        }
    }, [sections])

    const checkForEnter = (e) => {
        if (e.key === "Enter") {
            //Handle submit
            setSections((sections) => [...sections, <UserCommand command={userInput}/>])
            checkUserInput();
            setUserInput("");
        }
    }

    const checkUserInput = () => {
        const val = userInput.toLowerCase();
        console.log(val);
        if (val === "clear") {
            setSections([setSections(() => [<UserCommand command={userInput}/>])])
        } else if (val === "about") {
            setSections((sections) => [...sections, <About/>]); 
        } else if (val === "specs" || val === "specifications") {
            setSections((sections) => [...sections, <Specs/>]);
        } else if (val === "help") {
            setSections((sections) => [...sections, <Help/>]);
        } else {
            setSections((sections) => [...sections, <Unknown/>]);
        }
    }

    const userTyping = (inp) => {
        setUserInput(inp.target.value)
    }

    return(
        <div className={isSelected ? "terminalContainer" : "hidden"} style={{zIndex: props.order}} onClick={() => bringToFront()}>
            <div className="terminalHeader">
                <div className="headerButtonContainer">
                    <div className="closedButton" onClick={() => closeTerminal()}/>
                    <div className="headerButton" />
                    <div className="headerButton" />
                </div>
                <div className="terminalHeaderTitleContainer">
                    <p className="terminalHeaderTitle">New Terminal Window -- /users/Octave/About/</p>
                </div>
            </div>
            <div className="terminalBody">
                {sections.map((s, idx) => {
                    return(
                        <div key={idx}>{s}</div>
                    );
                })}
                <div className="inputLine">
                    <h4>octave{">"}</h4>
                    <input
                        autoFocus
                        type="text"
                        className="terminalInput" 
                        onKeyDown={checkForEnter}
                        onChange={(change) => userTyping(change)}
                        value={userInput}
                        style={{width: `${userInput.length * 8 + 10}px`}}
                    />
                    <div className="blinkingOperator"/>
                </div>
                <div style={{height: "1px", width: "1px"}} ref={inputRef} />
            </div>
        </div>
    )
}

export default Terminal;