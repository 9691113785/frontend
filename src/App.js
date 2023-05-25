import React, { createContext, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Routing from './components/Routing';

export const store = createContext();

const App = () => {
  const [details, setDetails] = useState([
    {
      stuname:"alok",
      department:"cs",
      salary:50000
    },
    {
      stuname:"abhi",
      department:"cs",
      salary:50000
    },
    {
      stuname:"anu",
      department:"cs",
      salary:50000
    },
    {
      stuname:"akash",
      department:"cs",
      salary:50000
    }
   ])

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
