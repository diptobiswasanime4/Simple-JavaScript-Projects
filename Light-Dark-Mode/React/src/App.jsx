import { useState } from "react";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  function toggle() {
    setIsDark((prevValue) => !prevValue);
  }
  return (
    <main className={`app ${isDark ? "light" : "dark"}`}>
      <h1 className="heading">{isDark ? "Light" : "Dark"} Mode</h1>
      <p onClick={toggle}>{!isDark ? "🌞" : "🌛"}</p>
    </main>
  );
}

export default App;
