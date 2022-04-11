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
       <Featured FeatureName={"TOP RATED"} FeatureURL="https://api.themoviedb.org/3/movie/top_rated?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US"/>
       <Featured FeatureName={"UPCOMING"} FeatureURL="https://api.themoviedb.org/3/movie/upcoming?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US"/>
       <Featured FeatureName={"TRENDING"} FeatureURL="https://api.themoviedb.org/3/trending/all/day?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US"/>
       </div>
        </>
  );
}

export default App;
