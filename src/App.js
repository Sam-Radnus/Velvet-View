import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Video1 from './components/secondary/Video1';
import { useState } from 'react';
import NowPlaying from './components/NowPlaying';
import Featured from './components/Featured';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SeeAll from './components/info/SeeAll';
import { useEffect } from 'react';
function App() {
  
  return (
    <>
  
      <Router>
        <Navbar />
        <Sidebar />
      
        
        
          <Routes>
         
          <Route exact path="/" element={<> 
            
            <div style={{ marginTop:`${window.location.pathname==='/'?'70vh':'10vh'}`, marginLeft: '25vw' }}>
            <NowPlaying />
          <Featured FeatureName={"TOP RATED"}    location={"TopRated"} FeatureURL="https://api.themoviedb.org/3/movie/top_rated?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US" />
          <Featured FeatureName={"UPCOMING"}     location={"Upcoming"} FeatureURL="https://api.themoviedb.org/3/movie/upcoming?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US" />
          <Featured FeatureName={"TRENDING"}     location={"Trending"} FeatureURL="https://api.themoviedb.org/3/trending/all/day?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US" />
          <Featured FeatureName={"RECOMMENDED"}  location={"Recommended"} FeatureURL="https://api.themoviedb.org/3/movie/11/recommendations?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&page=1" />
            </div>
          </>}
         ></Route>
         <Route exact path="/TopRated" element={<SeeAll key="topRated" title="Top Rated" URL="https://api.themoviedb.org/3/movie/top_rated?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US"></SeeAll>}></Route>
         <Route exact path="/Upcoming" element={<SeeAll key="upComing" title="Upcoming" URL="https://api.themoviedb.org/3/movie/upcoming?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US"></SeeAll>}></Route>
         <Route exact path="/Trending" element={<SeeAll key="Trending" title="Trending" URL="https://api.themoviedb.org/3/trending/all/day?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US"></SeeAll>}></Route>
         <Route exact path="/Recommended" element={<SeeAll key="Recommended" title="Recommended" URL="https://api.themoviedb.org/3/movie/11/recommendations?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&page=1"></SeeAll>}></Route>
          </Routes>
      
      </Router>
    </>
  );
}

export default App;
