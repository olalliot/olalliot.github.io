import "./AppletMobile.css"
const AppletMobile = (props) => {

    const {label} = props;

    return (
        <div
            className="appletMobileContainer"
        >
            <img alt="App Icon" src={props.src} className="appletIconMobile"/>
            <p>{label}</p>
        </div>
    );
}

export default AppletMobile;