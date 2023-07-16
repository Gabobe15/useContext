import React,{useState} from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { LoginContext } from "./contexts/LoginContext";

function App() {
  const [showProfile, setShowProfile] = useState(false)
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="App">
      <LoginContext.Provider value={{
        username, setUserName, setShowProfile,
        password, setPassword
          }}>
        {showProfile ? <Profile/> : <Login/>
      }
      </LoginContext.Provider>
    </div>
  );
}

export default App;
