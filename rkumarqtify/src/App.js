import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import {fetchTopAlbums} from './api/api';
import { useEffect,useState } from 'react';
import styles from "./App.module.css";
function App() {

  const [topAlbumns,setTopAlbumns] = useState([]);



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


  useEffect(()=>{
    generateTop();
  },[])



  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type='album' title='Top Albums' data={topAlbumns}/>
      </div>
    </div>
  );
}

export default App;
