import AppletMobile from "./Assets/AppletMobile/AppletMobile"
import "./Mobile.css"

const Mobile = () => {



    return(
        <>
            <img class="wallpaperMobile" src="unsplash_gradient.jpg" alt="background"/>
            <div className="mobileApps">
                <AppletMobile label="Education" src="/appIcons/documents.png"/>
                <AppletMobile label="Experience" src="/appIcons/email.png"/>
                <AppletMobile label="About" src="/appIcons/terminal.png"/>
            </div>
            <div className="mobileAppsDock">
                <AppletMobile label="Browser" src="/appIcons/browser.png"/>
                <AppletMobile label="More" src="/appIcons/more.png"/>
            </div>
        </>
    )
}

export default Mobile