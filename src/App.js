import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Video1 from './components/secondary/Video1';
import { useState } from 'react';
import NowPlaying from './components/NowPlaying';
import Featured from './components/Featured';
function App() {
  const [id,setID]=useState("u34gHaRiBIU");
  return (
       <>
       <Navbar/>
       <Sidebar/>
       <NowPlaying/>
       <div style={{marginTop:'70vh',marginLeft:'25vw'}}>
       <Featured FeatureName="top_rated"/>
       <Featured FeatureName="upcoming"/>
       </div>
        </>
  );
}

export default App;
