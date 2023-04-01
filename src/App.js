import React, {useState} from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  function togglerChange() {
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className="App">
      <Header darkMode={darkMode} togglerChange={togglerChange} />
      <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;
