import React, { useState } from "react";
import ClaudeInterface from "./pages/ClaudeInterface";
import ClaudeLoginPage from "./pages/ClaudeLoginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? (
        <ClaudeInterface onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <ClaudeLoginPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
