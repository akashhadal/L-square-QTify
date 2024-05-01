
// import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import {fetchTopAlbums} from './api/api'
import { useEffect, useState } from 'react';
import Section from "./components/Section/Section";
import styles from "./App.module.css"

function App() {

  const[topAlbumSongs,setTopAlbumSongs]=useState([]);

   //function to get top/new Album/Songs we will be using function from API file also
   const generateTopAlbumSongs=async()=>{
    try{
      const res= await fetchTopAlbums();
    setTopAlbumSongs(res);
    }
    catch(error){
      console.log(error);
      return null;
    } 
  }

  useEffect(()=>{
    generateTopAlbumSongs();
  },[]);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
      <Section type='album' title='Top Albums' data={topAlbumSongs}/>
      </div>
    </div>
  );
}

export default App;
