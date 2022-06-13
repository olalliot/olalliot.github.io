import { useState } from "react";
import "./Browser.css";

const Browser = (props) => {

    const {isSelected} = props;
    const [activeTab, setActiveTab] = useState(0);
    const [darkMode, setDarkMode] = useState(true);
    const tabs = ["Delph", "La Toile", "Convocapp", "Mile Out", "TaskDaddy"];
    const URLs = ["https://www.delph.org", "https://www.latoile.io", "https://docs.google.com/presentation/d/1FVg_mLGHu8Xum7frHCHgNBGynW60TZjcxsxK5lhfUxs/edit?usp=sharing", "https://www.mile-out.com", "https://github.com/olalliot/TaskDaddy-public/"];
    const content = [];

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

            </div>
        </div>
    );
}

export default Browser;