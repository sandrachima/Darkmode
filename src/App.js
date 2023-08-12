import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
//import useLocalStorage from 'use-local-storage'
import { icons } from 'react-icons';
import { createContext } from 'react';
import ReactSwitch from 'react';
import form from './form';

export const ThemeContext = createContext('null');



function App() {
  const [theme, setTheme] = useState('dark');
 
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? "dark" : 'light'));


  };

  return (
 <ThemeContext.Provider value ={{theme, toggleTheme }}> 
 <div className='App'>
  <form />
  <div className = "switch">
  <label {theme=== 'light'?'light Mode':'Dark Mode'} />
 <ReactSwitch  onChange ={toggleTheme} checked={theme=== 'dark' }/> 
 </div>

</div>
    </ThemeContext.Provider>

  
  );
}

export default App;
