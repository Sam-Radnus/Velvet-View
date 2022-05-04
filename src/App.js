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
import { useNavigate } from "react-router-dom";
import Details from './components/info/Details';
import Anime from './components/Category/Anime';
import TVShows from './components/Category/TVShows';
import AdvancedSearch from './components/Features/AdvancedSearch';
import DateNight from './components/Features/DateNight';
import TVDetails from './components/Category/TV/TVDetails';
import SeeAllGenre from './components/info/SeeAllGenre';
import AnimeGenre from './components/Category/AnimeGenre';
import AnimeDetails from './components/Category/AnimeDetails';
function App() {
  
  return (
    <>

      <Router>
        <Navbar />
       <Sidebar/>

     


        <Routes>
          <Route exact path="/" element={<>
       
            <NowPlaying />
            
            <div style={{ marginTop: "57vh", marginLeft: '25vw' }}>
          
              <Featured limit={"3"} FeatureName={"TOP RATED"} location={"TopRated"} FeatureURL="https://api.themoviedb.org/3/movie/top_rated?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US" />
              <Featured limit={"3"} FeatureName={"UPCOMING"} location={"Upcoming"} FeatureURL="https://api.themoviedb.org/3/movie/upcoming?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US" />
              <Featured limit={"3"} FeatureName={"TRENDING"} location={"Trending"} FeatureURL="https://api.themoviedb.org/3/trending/all/day?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US" />
              <Featured limit={"3"} FeatureName={"RECOMMENDED"} location={"Recommended"} FeatureURL="https://api.themoviedb.org/3/movie/11/recommendations?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US" />
            </div>
          </>}
          ></Route>
         <Route exact path="/Anime" element={<Anime/>}>
           <Route  path="Details/Anime/:username" element={<AnimeDetails />} />
         </Route>
         <Route  path="Genre/:media/:heading/:genre" element={<SeeAllGenre ></SeeAllGenre>}>
            <Route  path="Details/:username" element={<Details />} />  
            <Route  path="Details/TV/:username" element={<TVDetails />} />  
    
         </Route>
         <Route  path="Genre/Anime/:media/:heading/:genre" element={< AnimeGenre></AnimeGenre>}>
            
            <Route  path="Details/Anime/:username" element={<AnimeDetails />} />  
         </Route>
         <Route exact path="/TVShows" element={<TVShows/>}>
  
         </Route>
        
         <Route exact path="/AdvancedSearch" element={<AdvancedSearch/>}>
              <Route  path="Details/movie/:username" element={<Details />} />
              <Route  path="Details/tv/:username" element={<TVDetails />} />
         </Route>
         <Route exact path="/DateNight" element={<DateNight/>}>
         <Route  path="Details/:username" element={<Details />} />
         </Route>
          <Route exact path="/TopRated" element={<SeeAll key="topRated" title="Top Rated" URL="https://api.themoviedb.org/3/movie/top_rated?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US"></SeeAll>}>
            <Route  path="Details/:username" element={<Details />} />
           
          </Route>
          <Route exact path="/Upcoming" element={<SeeAll key="upComing" title="Upcoming" URL="https://api.themoviedb.org/3/movie/upcoming?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US"></SeeAll>}>
            <Route  path="Details/:username" element={<Details />} />
          
          </Route>
          <Route exact path="/Trending" element={<SeeAll key="Trending" title="Trending" URL="https://api.themoviedb.org/3/trending/all/day?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US"></SeeAll>}>
            <Route  path="Details/:media/:username" element={<Details />} />
            
          </Route>
          <Route exact path="/Recommended" element={<SeeAll key="Recommended" title="Recommended" URL="https://api.themoviedb.org/3/movie/11/recommendations?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&page=1"></SeeAll>}>
            <Route  path="Details/movie/:username" element={<Details />} />
          </Route>
          
          <Route  path="TVShows/OnAir" element={<SeeAll key="onAir" title="On Air" URL="https://api.themoviedb.org/3/tv/on_the_air?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&page=2"></SeeAll>}>
          <Route  path="Details/:username" element={<TVDetails />} />
          </Route>
    
          <Route  path="TVShows/Action" element={<SeeAll key="action" title="Action & Adventure" URL="https://api.themoviedb.org/3/discover/tv?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10759&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"></SeeAll>}>
          <Route  path="Details/:username" element={<TVDetails />} />
          </Route>

          <Route  path="TVShows/Soap" element={<SeeAll key="soap" title="Soap & Comedy" URL="https://api.themoviedb.org/3/discover/tv?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=35|10766&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"></SeeAll>}>
          <Route  path="Details/:username" element={<TVDetails />} />
          </Route>
          <Route  path="TVShows/Crime" element={<SeeAll key="crime" title="Crime & Drama" URL="https://api.themoviedb.org/3/discover/tv?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=80|18&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"></SeeAll>}>
          <Route  path="Details/:username" element={<TVDetails />} />
          </Route>
          <Route  path="TVShows/Fantasy" element={<SeeAll key="fantasy" title="Sci-Fi & Fantasy" URL="https://api.themoviedb.org/3/discover/tv?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10765&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"></SeeAll>}>
          <Route  path="Details/:username" element={<TVDetails />} />
          </Route>
          <Route  path="TVShows/Documentary" element={<SeeAll key="documentary" title="Documentary" URL="https://api.themoviedb.org/3/discover/tv?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=99&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"></SeeAll>}>
          <Route  path="Details/:username" element={<TVDetails />} />
          </Route>
          <Route  path="TVShows/FamilyandKids" element={<SeeAll key="Family&Kids" title="Family&Kids" URL="https://api.themoviedb.org/3/discover/tv?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10751|10762&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"></SeeAll>}>
          <Route  path="Details/:username" element={<TVDetails />} />
          </Route>
          <Route  path="TVShows/Mystery" element={<SeeAll key="Mystery" title="Mystery" URL="https://api.themoviedb.org/3/discover/tv?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=9648&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"></SeeAll>}>
          <Route  path="Details/:username" element={<TVDetails />} />
          </Route>
          <Route  path="TVShows/News" element={<SeeAll key="documentary" title="Documentary" URL="https://api.themoviedb.org/3/discover/tv?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10763&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"></SeeAll>}>
          <Route  path="Details/:username" element={<TVDetails />} />
          </Route>
          <Route  path="TVShows/Reality" element={<SeeAll key="documentary" title="Documentary" URL="https://api.themoviedb.org/3/discover/tv?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10764&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"></SeeAll>}>
          <Route  path="Details/:username" element={<TVDetails />} />
          </Route>
          <Route  path="TVShows/Talk" element={<SeeAll key="documentary" title="Documentary" URL="https://api.themoviedb.org/3/discover/tv?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10767&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"></SeeAll>}>
          <Route  path="Details/:username" element={<TVDetails />} />
          </Route>
          <Route  path="TVShows/War & Politics" element={<SeeAll key="documentary" title="Documentary" URL="https://api.themoviedb.org/3/discover/tv?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10768&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"></SeeAll>}>
          <Route  path="Details/:username" element={<TVDetails />} />
          </Route>

        </Routes>

      </Router>
    </>
  );
}

export default App;
