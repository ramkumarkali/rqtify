import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import {fetchTopAlbums,fetchNewAlbums} from './api/api';
import { useEffect,useState } from 'react';
import styles from "./App.module.css";
function App() {

  const [topAlbumns,setTopAlbumns] = useState([]);
  const [newalbumns, setNewAlbumSongs] = useState([]);



  const generateTop = async()=>{
    try{
      const res = await fetchTopAlbums();
      setTopAlbumns(res);
    }
    catch(error){
      // console.log(error);
      return null;
    }
  }

  const generateNew = async()=>{
    try{
      const res = await fetchNewAlbums();
      setNewAlbumSongs(res);
    }
    catch(error)
    {
      return null;
    }
  }


  useEffect(()=>{
    generateTop();
    generateNew();
  },[])



  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type='album' title='Top Albums' data={topAlbumns}/>
        <Section type='album' title='New Albums' data={newalbumns}/>
      </div>
    </div>
  );
}

export default App;
