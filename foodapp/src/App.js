import "./App.css";
import React, { useState, createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesPages from "./Pages/RoutesPages";
const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);
const App = () => {
  const [cityDetails, setAddressDetails] = useState( "");
  return (
    <UserContext.Provider value={cityDetails}>
      <UserDispatchContext.Provider value={setAddressDetails}>
      <Router>
        <RoutesPages />
      </Router>
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
export { UserContext,UserDispatchContext };
