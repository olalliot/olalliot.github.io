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
            "logoPath": "/logos/wmd.jpeg",
            "summary": "",
            "objectives": ["Implementation of firm-wide new DMS and accounting system", "Developped Excel redaction ribbon add-in", "MergeMail document generator", "Oversaw 2 beta tests for select partners working with 3rd party vendors", "Helped oversee data security and containment when necessary", "Advised partners with eDiscovery best practices and strategies"],
            "skills": ["Python (tooling)", "JavaScript (tooling)", "Salesforce", "Microsoft Flow", "Office Add-in development", "Project Management", "Data Security"],
        }, 
        {
            "title": "Software Intern, Zenly",
            "subtitle" : "Paris • 2019",
            "company": "Zenly",
            "logoPath": "/logos/zenly.jpeg",
            "summary": "",
            "objectives": ["Designed and Pitched a new feature for the app", "Deployed new sharing options for user content on iOS and Android", "Prototyped new design ideas for user app"],
            "skills": ["ProtoPie / Sketch", "Swift", "Kotlin", "C (used for prototyping efffects)"],
        },
        {
            "title" : "iOS Intern, Cleeng",
            "subtitle" : "Amsterdam • 2017",
            "company" : "Cleeng",
            "logoPath": "/logos/cleeng.jpeg",
            "summary": "",
            "objectives": ["Model App for Cleeng clients"],
            "skills": ["Objective-C", "Swift"],
        }
    ];

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
                        <p className="emailBodySummary">{}</p>
                        <div className="emailBodyAchieved">
                            <h4>Objectives Achieved</h4>
                            {emails[activeMail]["objectives"].map((o) => {
                                return (
                                    <p className="emailBodyListItem">• {o}</p>
                                );
                            })}
                        </div>
                        <div className="emailBodySkillsDeveloped">
                            <h4>Skills Learned</h4>
                            {}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Email;