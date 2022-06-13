import Applet from './Assets/Applet/Applet';
import Terminal from './Apps/Terminal/Terminal';
import Browser from './Apps/Browser/Browser';
import Email from './Apps/Email/Email';
import Settings from './Apps/Settings/Settings';
import { useState } from 'react';
import './App.css';

const App = () => {

  const [windows, setWindows] = useState({
    "Terminal" : {
      "shown": false,
      "index": 6,
    },
    "Settings" : {
      "shown" : false,
      "index": 6,
    },
    "Browser" : {
      "shown" : false,
      "index" : 6,
    },
    "Contacts" : {
      "shown" : false,
      "index" : 6,
    },
    "Education" : {
      "shown" : false,
      "index" : 6,
    },
    "Email" : {
      "shown" : false,
      "index" : 6,
    }
  });

  const showWindow = (windowName) => {
    windows[windowName]["shown"] = true;
    setWindows({...windows});
    updateOrder(windowName);
  }

  const closeWindow = (windowName) => {
    windows[windowName]["shown"] = false;
    setWindows({...windows});
    updateOrder(windowName);
  }

  const updateOrder = (windowName) => {
    for (const [key, _] of Object.entries(windows)) {
      if (key === windowName) { //Leave that one alone
        windows[windowName]["index"] = 6;
      } else {
        if (windows[key]["index"] > 1 && windows[key]["shown"]) {
          windows[key]["index"] -= 1;
        }
      }
    }
    setWindows({...windows});
  }

  return (
      <>
        <img alt="wallpaper" src="/bg_2.jpeg" className="wallpaper" /> 
        <Terminal
          isSelected={windows["Terminal"]["shown"]}
          order={windows["Terminal"]["index"]}
          updateOrder={updateOrder}
          closeWindow={closeWindow}
        />
        <Browser
          isSelected={windows["Browser"]["shown"]}
          order={windows["Browser"]["index"]}
          updateOrder={updateOrder}
          closeWindow={closeWindow}
        />
        <Email
          isSelected={windows["Email"]["shown"]}
          order={windows["Email"]["index"]}
          updateOrder={updateOrder}
          closeWindow={closeWindow}
        />
        <Settings
          isSelected={windows["Settings"]["shown"]}
          order={windows["Settings"]["index"]}
          updateOrder={updateOrder}
          closeWindow={closeWindow}
        />
        <div className="dockContainer">
            <Applet src="/appIcons/browser.png" isSelected={windows["Browser"]["shown"]} target="Browser" showWindow={showWindow}/>
            <Applet src="/appIcons/email.png" isSelected={windows["Email"]["shown"]} target="Email" showWindow={showWindow}/>
            <Applet src="/appIcons/documents.png" isSelected={windows["Education"]["shown"]} target="Education" showWindow={showWindow}/>
            <Applet src="/appIcons/terminal.png" isSelected={windows["Terminal"]["shown"]} target="Terminal" showWindow={showWindow}/>
            <Applet src="/appIcons/contact.png" isSelected={windows["Contacts"]["shown"]} target="Contacts" showWindow={showWindow}/>
            <Applet src="/appIcons/more.png" isSelected={windows["Settings"]["shown"]} target="Settings" showWindow={showWindow}/>
        </div>
      </>
  );
} 

export default App;
