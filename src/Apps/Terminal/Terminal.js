import "./Terminal.css";

const Terminal = (props) => {

    const {isSelected} = props;

    const closeTerminal = () => {
        props.closeWindow("Terminal");
    }

    const bringToFront = () => {
        props.updateOrder("Terminal");
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
                <p>------------------------------------------</p>
                <p>USER INFORMATION</p>
                <p>------------------------------------------</p>
                <h4>octave{">"} About Me</h4>
                <p>I was born in Paris, and had the chance to live in Paris, Brussels, Washington D.C and New York while growing up (that meant moving every 3 years!!)</p>
                <p>After graduating from the Ecole Jeannine Manuel with my Bacclauréat OIB Options Scientifique with <i>Mention Très Bien</i>, I went to the University of Michigan; where I earned my B.S in Computer Science.</p>
                <p>Following my graduation during the slightly tumultuous Spring of 2020, I started working at Wollmuth, Maher and Deutsch, a litigation firm in New York.</p>
                <p>Outside of work, I like to pursue a variety of side projects, some of which you can find by selecting the browser icon in the dock below. When I'm not programming, I like to channel my inner frenchman by cooking elaborate recipes that I've found online, and spending some time with my ever troublesome dog Korra </p>
                <br />
                <h4>octave{">"} Specs</h4>
                <p>------------------------------------------</p>
                <p>USER SPECIFICATIONS</p>
                <p>------------------------------------------</p>
                <p>Title: Front-End Developer, UI/UX Designer</p>
                <p>Languages: JavaScript, TypeScript, Python, Swift, Solidity</p>
                <p>Frameworks: React, React Native, Next.JS</p>
                <p>Additional Skills: CSS/SCSS, HTML, GCP/Firebase, AWS, Wireframing, Prototyping, Smart Contract creation and deployment</p>
                <p>(Spoken) Languages: French, English</p>
                <p>Traits: Flexible, Driven, Curious, Team Player, Communicator</p>
                <br></br>
                <div className="inputLine">
                    <h4>octave{">"}</h4>
                    <div className="blinkingOperator"/>
                </div>
            </div>
        </div>
    )
}

export default Terminal;