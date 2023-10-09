import { useState } from "react";
import "./Settings.css";

const LogoItem = (props) => {
    const {icon, title, value, link} = props;

    return(
        <div className="settingsInformationItem">
            <img className="settingsInformationIcon" alt="Information Icon" src={icon}/>
            <div className="settingsInformationText">
                <p className="settingsInformationItemTitle">{title}</p>
                <p className="settingsInformationItemValue">
                    {link ? <a href={value} className="settingsInformationItemLink">{value}</a>: <div className='settingsInformationItemLink'>{value}</div> }
                </p>
            </div>
        </div>
    );
}

const Settings = (props) => {
    const {isSelected} = props;
    const [fileDownloaded, setFileDownloaded] = useState(false);
    const contact = [
        {
            "title": "Address",
            "value": " 2 rue des Chatelaines, Meudon 92190",
            "icon": "/icons/home.png",
        },
        {
            "title": "Phone",
            "value": " 06 52 43 42 23",
            "icon": "/icons/phone.png"
        },
        {
            "title": "Email",
            "value": " octave.lalliot@gmail.com",
            "icon": "/icons/email.png"
        }
    ];
    const bringToFront = () => {
        props.updateOrder("Settings");
    }

    const closeSettings = () => {
        props.closeWindow("Settings");
    }

    return (
        <div className={isSelected ? "settingsContainer" : "hidden"} style={{zIndex: props.order}} onClick={() => bringToFront()}>
            <div className="emailHeader">
                <div className="browserButtons">
                    <div className="closedButton" onClick={() => closeSettings()}/>
                    <div className="headerButton" />
                    <div className="headerButton" />
                </div>
            </div>
            <div className="settingsElement">
                <div className="settingsHeader">
                    <img alt="Octave Lalliot profile" src="/profile.jpg" className="settingsProfile" />
                    <div className="settingsHeaderText">
                        <p className="settingsHeaderTitle">Octave Lalliot</p>
                        <p className="settingsHeaderSubtitle">Junior Developer • UI/UX Designer</p>
                    </div>
                </div>
                <div className="settingsInformation">
                    <div className="settingsSectionTitle">
                        <p>Contact Information</p>
                    </div>
                    <div className="settingsInformationItems">
                        {contact.map((c, idx) => {
                            return(
                                <LogoItem icon={c.icon} title={c.title} value={c.value} key={idx} link={false} />
                            );
                        })}
                    </div>
                </div>
                <div className="settingsSocial">
                    <div className="settingsSectionTitle">
                        <p>Social Links</p>
                    </div>
                    <>
                        <LogoItem icon="/icons/github.png" title="GitHub" value="https://github.com/olalliot" link={true}/>
                        <LogoItem icon="/icons/linkedin-logo.png" title="LinkedIn" value="https://www.linkedin.com/in/olalliot/" link={true}/>
                    </>
                </div>
                <div className="settingsDownload">
                    <div className="settingsSectionTitle">
                        <p>CV</p>
                    </div>
                    <div className="settingsDownloadButtonContainer" onClick={() => setFileDownloaded(true)}>
                        <a className={fileDownloaded ? "settingsDownloadButtonConfirm" : "settingsDownloadButton"} href={"/Octave_Lalliot_Resume.pdf"} download>
                            <img alt="Download icon" src={fileDownloaded ? "/icons/upvote.png" : "/icons/download.png"} className={fileDownloaded ? "settingsDownloadButtonIconConfirm" : "settingsDownloadButtonIcon"}/>
                            {fileDownloaded ? "Download Started" : "Download my CV"}
                        </a>
                    </div>
                </div>
                <div className="settingsSourceCode">
                    <div className="settingsSectionTitle">
                        <p>Source Code</p>
                    </div>
                    <>
                        <p className="settingsSourceCodeText">View the source code for this website by visiting the link below</p>
                        <a href="https://github.com/olalliot/olalliot.github.io" rel="noopener noreferrer" className="settingsSourceCodeLink">
                            <img alt="GitHub Logo" src="/icons/github.png" className="settingsSourceCodeLinkIcon"/>
                            <p className="settingsSourceCodeLinkText">View on GitHub</p>
                        </a>
                    </>
                </div>
            </div>
        </div>
    )
}

export default Settings;