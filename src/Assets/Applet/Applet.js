import "./Applet.css";

const Applet = (props) => {

    const {isSelected} = props;

    const selectApplet = () => {
        props.showWindow(props.target);
    }

    return (
        <div className={isSelected ? "appletContainerSelected" : "appletContainer"} onClick={() => selectApplet()}>
            <img alt="App Icon" src={props.src} className={isSelected ? "appletIconSelected" : "appletIcon"}/>
            <div className={isSelected ? "selectedDot" : "hidden"} />
        </div>
    );
}

export default Applet;