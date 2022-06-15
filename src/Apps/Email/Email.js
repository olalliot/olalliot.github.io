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
            "summary": "I joined WMD in the Fall of 2020, following my graduation. I was brought as part of the IT team, and was tasked with two general roles. The first was to help maintain the current infrastructure: provide support to lawyers when needed, and work with the more tech-savvy partners of the Firm to create internal tools aimed at improving productivity or addressing known pain points with the current systems. My second role was to use my engineering and software background to identify opportunities for improvement, and evaluate potential 3rd party solutions. My secondary role also allowed me to assist with the implementation and use of newer LegalTech products (especially in the eDiscovery field).",
            "objectives": ["Implementation of firm-wide new DMS and accounting system", "Developed Excel redaction ribbon add-in", "MergeMail document generator", "Oversaw 2 beta tests for select partners working with 3rd party vendors", "Helped oversee data security and containment when necessary", "Advised partners with eDiscovery best practices and strategies"],
            "skills": ["Python (tooling)", "JavaScript (tooling)", "Salesforce", "Microsoft Flow", "Office Add-in development", "Project Management", "Data Security"],
        }, 
        {
            "title": "Software Intern, Zenly",
            "subtitle" : "Paris • 2019",
            "company": "Zenly",
            "logoPath": "/logos/zenly.jpeg",
            "summary": "I originally joined Zenly as an intern for the iOS team. However, as my internship went on, I started to work more closely with the Growth and Design staff. I was first tasked with evaluating the application and its design, to provide notes and suggestions for how Zenly might tweak their product to make it more appealing. Afterwards, I came up with, designed and prototyped a brand new feature for the app. I then pitched it to the CEO and other C-suite members of the team. I also occasionally pushed changes to the app (most notably, adding in new sharing features for some of the user-specific content). Overrall, the internship was an opportunity to grow beyond being just a programmer, by adding in elements of UI and UX design to my skillset as a developer.",
            "objectives": ["Designed and Pitched a new feature for the app", "Deployed new sharing options for user content on iOS and Android", "Prototyped new design ideas for user app"],
            "skills": ["ProtoPie / Sketch", "Swift", "Kotlin", "C (used for shader prototyping)"],
        },
        {
            "title" : "iOS Intern, Cleeng",
            "subtitle" : "Amsterdam • 2017",
            "company" : "Cleeng",
            "logoPath": "/logos/cleeng.jpeg",
            "summary": "I worked at Cleeng's main office in Amsterdam as an iOS Intern, working most closely with a freelance developer, and Cleeng's engineering team (based out of Poland). I was primarily tasked with laying the foundation for what would become Cleeng's 'skeleton' app for its customers - a plug & play mobile app that customers could load up with their own proprietary content. ",
            "objectives": ["Model App for Cleeng clients"],
            "skills": ["Objective-C", "Swift", "Wireframing"],
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
                        <p className="emailBodySummary">{emails[activeMail]["summary"]}</p>
                        <div className="emailBodyAchieved">
                            <h4>Objectives Achieved</h4>
                            {emails[activeMail]["objectives"].map((o) => {
                                return (
                                    <p className="emailBodyListItem">• {o}</p>
                                );
                            })}
                        </div>
                        <div className="emailBodySkillsDeveloped">
                            <h4>Skills Developed</h4>
                            {emails[activeMail]["skills"].map((o) => {
                                return (
                                    <p className="emailBodyListItem">• {o}</p>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Email;