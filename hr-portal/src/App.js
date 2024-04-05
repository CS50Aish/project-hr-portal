import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <Login onLogin={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;
