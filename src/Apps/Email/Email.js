import { useState } from "react";
import "./Email.css";

const Email = (props) => {
    const {isSelected} = props;
    const [activeMail, setActiveMail] = useState(0);
    const emails = [
        {
            "title": "IT @ Wollmuth, Maher & Deutsch",
            "subtitle" : "New York • 2020 - Present",
            "company": "Wollmuth, Maher & Deutsch LLP",
            "logoPath": "/logos/wmd.jpeg"
        }, 
        {
            "title": "Software Intern, Zenly",
            "subtitle" : "Paris • 2019",
            "company": "Zenly",
            "logoPath": "/logos/zenly.jpeg",
        },
        {
            "title" : "iOS Intern, Cleeng",
            "subtitle" : "Amsterdam • 2017",
            "company" : "Cleeng",
            "logoPath": "/logos/cleeng.jpeg",
        }
    ]
    const bringToFront = () => {
        props.updateOrder("Email");
    }

    const closeEmail = () => {
        props.closeWindow("Email");
    }

    return (
        <div className={isSelected ? "emailContainer" : "hidden"} style={{zIndex: props.order}} onClick={() => bringToFront()}>
            <div className="emailHeader">
                <div className="browserButtons">
                    <div className="closedButton" onClick={() => closeEmail()}/>
                    <div className="headerButton" />
                    <div className="headerButton" />
                </div>
            </div>
            <div className="emailElement">
                <div className="emailItems">
                    {emails.map((e, idx) => {
                        return(
                            <div className={activeMail === idx ? "emailItemSelect" : "emailItem"} onClick={() => setActiveMail(idx)}>
                                <img className="emailLogo" alt="Company Logo" src={e.logoPath} />
                                <div className="emailText">
                                    <p className="emailTitle">{e.title}</p>
                                    <p className="emailSubtitle">{e.subtitle}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="emailBody">
                    <div className="emailBodyHeader">
                        <p className="emailBodyHeaderSubject">{emails[activeMail]["title"]}</p>
                        <div className="emailBodyHeaderDetails">
                            <img alt="Company Logo" src={emails[activeMail]["logoPath"]} className="emailBodyLogo" />
                            <div className="emailBodyHeaderText">
                                <p className="emailBodyHeaderCompany">{emails[activeMail]["company"]}</p>
                                <p className="emailBodyHeaderDate">{emails[activeMail]["subtitle"]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="emailBodyContent">

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Email;