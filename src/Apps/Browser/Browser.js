import { useState } from "react";
import "./Browser.css";

const Browser = (props) => {

    const {isSelected} = props;
    const [activeTab, setActiveTab] = useState(0);
    const [darkMode, setDarkMode] = useState(true);
    const tabs = ["Delph", "La Toile", "Convocapp", "Mile Out", "TaskDaddy"];
    const URLs = ["https://www.delph.org", "https://www.latoile.io", "https://docs.google.com/presentation/d/1FVg_mLGHu8Xum7frHCHgNBGynW60TZjcxsxK5lhfUxs/edit?usp=sharing", "https://www.mile-out.com", "https://github.com/olalliot/TaskDaddy-public/"];
    const content = [
        {
            "Position": "CTO & Co-Founder",
            "Period": "Ongoing",
            "Platform": "Website",
            "imgURL": "",
            "stack": [
                ["Material UI", "/stackIcons/mui.png"],
                ["Next.JS", "/stackIcons/nextJS.png"],
                ["Firebase", "/stackIcons/firebase.png"],
                ["Heroku", "/stackIcons/heroku.svg"],
                ["Infura", "/stackIcons/infura.png"],
                ["Stripe", "/stackIcons/stripe.webp"]
            ],
            "description": "A web3 platform enabling charities to raise funds through the sale of NFTs",
            "Notable" : [
                "Released 1st NFT collection by Presidential Candidate",
                ">2000$ volume in 2 weeks",
                "Sold over 150 NFTs to 100 users",
                "Released collections in support of Ukraine",
                "Selected for interviews with Y Combinator"
            ]
        },
        {
            "Position": "Founder",
            "Period": "Nov. 2021 - Ongoing",
            "Platform": "Website",
            "imgURL": "",
            "stack": [
                ["React", "/stackIcons/React-icon.png"],
                ["Firebase", "/stackIcons/firebase.png"],
                ["Google Cloud Platform", "/stackIcons/gcp_logo.png"],
            ],
            "description": "Monthly collaboritve canvas. Reset at end of month and sold as 1 of 1 NFT. Inspired by Reddit's r/place and the Million Dollar Homepage",
            "Notable": []
        },
        {
            "Position": "Founder & Lead Dev",
            "Period": "Sep. 2019 - Dec. 2019",
            "Platform": "Mobile App",
            "imgURL": "",
            "stack": [
                ["Swift", "/stackIcons/swift_logo.png"],
                ["Kotlin", "/stackIcons/kotlin.png"],
                ["Google Cloud Platform", "/stackIcons/gcp_logo.png"],
            ],
            "description": "A live transcription and translation AR app for the hard-of-hearing",
            "Notable": [
                "Awarded social & community prize during showcase",
            ]
        },
        {
            "Position": "CTO & Co-Founder",
            "Period": "Nov. 2019 - Mar. 2020",
            "Platform": "Website",
            "imgURL": "",
            "stack": [
                ["React", "/stackIcons/React-icon.png"],
                ["React-Redux", "/stackIcons/redu.png"],
                ["Firebase", "/stackIcons/firebase.png"]
            ],
            "description": "Live camera feeds for the lines of the most popular bars in Ann Arbor, MI.",
            "Notable": [
                "Passed 60k views in 4months",
                "Over 1200 users in 4months",
                "Partnered with local businesses to place cameras",
                "Tagged by multiple students in end of year posts that Mile-Out was an integral part of their year at Michigan 😁",
            ],
        },
        {
            "Position": "Co-Founder & CTO",
            "Period": "Jan. 2019 - Jun. 2019",
            "Platform": "Mobile App",
            "imgURL": "",
            "stack": [
                ["Expo (React Native)", "/stackIcons/expo.png"],
                ["React-Redux", "/stackIcons/redu.png"],
                ["Firebase", "/stackIcons/firebase.png"],
                ["Google Cloud Platform", "/stackIcons/gcp_logo.png"],
                ["AWS", "/stackIcons/aws.png"],
            ],
            "description": "A productivity app where users back their tasks with a small bet, which is sent to charity if they fail their task",
            "Notable": [],
        }
    ];

    const closeBrowser = () => {
        props.closeWindow("Browser");
    }

    const switchTabs = (idx) => {
        console.log(idx);
        setActiveTab(idx);
    }

    const bringToFront = () => {
        props.updateOrder("Browser");
    }



    return(
        <div className={isSelected ? "browserContainer" : "hidden"} style={{zIndex : props.order}} onClick={() => bringToFront()}>
            <div className={darkMode ? "browserHeader" : "browserHeader-Light"}>
                <div className="browserButtons">
                    <div className="closedButton" onClick={() => closeBrowser()}/>
                    <div className="headerButton" />
                    <div className="headerButton" />
                </div>
                <div className="browserTabs">
                    {tabs.map((t, idx) => {
                        return(
                            <div key={idx} className={activeTab === idx ? (darkMode ? "browserTabSelected" :  "browserTabSelected-Light" ) : (darkMode ? "browserTab" : "browserTab-Light" )} onClick={() => switchTabs(idx)}>
                                <p className="browserTabTitle">{t}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={darkMode ? "browserURLContainer" : "browserURLContainer-Light"}>
                <>
                    <a target="_blank" rel="noopener noreferrer" href={URLs[activeTab]}>
                        <img alt="Open in other window" src="/icons/open.png" className={darkMode ? "openExternalIcon" : "openExternalIcon-Light"} />
                    </a>
                </>
                <div className={darkMode ? "browserURL" : "browserURL-Light"}>
                    <p>{URLs[activeTab]}</p>
                </div>
                <div className="toggleMode" onClick={() => setDarkMode(!darkMode)}>
                    <img alt="Toggle Icon" src={darkMode ? "/icons/moon.png" : "/icons/sun.png"} className={darkMode ? "darkModeIcon" : "lightModeIcon"} />
                </div>
            </div>
            <div className="browserPage">
                <div className="projectInformation">
                    <div className="projectInformationItem">
                        <p className="projectInformationLabel">Position</p>
                        <p className="projectInformationTitle">{content[activeTab]["Position"]}</p>
                    </div>
                    <div className="projectInformationItem">
                        <p className="projectInformationLabel">Period</p>
                        <p className="projectInformationTitle">{content[activeTab]["Period"]}</p>
                    </div>
                    <div className="projectInformationItem">
                        <p className="projectInformationLabel">Platform</p>
                        <p className="projectInformationTitle">{content[activeTab]["Platform"]}</p>
                    </div>
                </div>
                <h4 className="browserPageSectionTitle">Stack</h4>
                <div className="projectStack">
                    {content[activeTab]["stack"].map((s) => {
                        return (
                            <div className="stackItem">
                                <img alt="stack icon" src={s[1]} className="stackItemIcon"/>
                                <p className="stackItemName">{s[0]}</p>
                            </div>
                        );
                    })}
                </div>
                <h4 className="browserPageSectionTitle">About</h4>
                <p className="projectDescription">{content[activeTab]["description"]}</p>
                <h4 className="browserPageSectionTitle">Notable</h4>
                <div className="notableContainer">
                    {content[activeTab]["Notable"].map((n) => {
                        return (
                            <div className="notableItem">
                                <p className="notableText">- {n}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Browser;