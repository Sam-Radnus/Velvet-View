import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Video1 from './components/secondary/Video1';
import { useState } from 'react';
function App() {
  const [id,setID]=useState("u34gHaRiBIU");
  return (
       <>
       <Navbar/>
       <Sidebar/>
       <Video1 loc={id}/>
        </>
  );
}

export default App;
