import React, { createContext, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Routing from './components/Routing';

export const store = createContext();

const App = () => {
  const [details, setDetails] = useState([ ])

  return (
    <div>
    <store.Provider value={{details:details, setDetails:setDetails}}>
    <Navbar />
    <Routing/>
    
    </store.Provider>
    </div>
  )
}

export default App
