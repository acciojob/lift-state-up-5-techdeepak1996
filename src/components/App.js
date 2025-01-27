import React, { useState } from "react";
import './../styles/App.css';
import Child from './Child';

const App = () => {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle the login process
  const handleLogin = () => {
    setIsLoggedIn(true); // Update state to logged in
  };
  return (
    <div>
        {/* Display login status */}
      <h1>{isLoggedIn ? "Welcome, you're logged in!" : "Please log in"}</h1>
      
      {/* Pass state and login function to the child component */}
      <Child isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </div>
  )
}

export default App
