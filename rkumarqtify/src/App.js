import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import {fetchTopAlbums,fetchNewAlbums, fetchSongs} from './api/api';
import { useEffect,useState } from 'react';
import styles from "./App.module.css";
import Filtersection from './components/filtersection/Filtersection';
function App() {

  const [topAlbumns,setTopAlbumns] = useState([]);
  const [newalbumns, setNewAlbumSongs] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [value, setValue] = useState(0);
  const [filteredData, setfilteredDtata] = useState([]);


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

  const generatesong = async()=>{
    try{
      const res = await fetchSongs();
      setSongsData(res);
      setfilteredDtata(res);
    }
    catch(error){
      return null;
    }
  }

  const generatenewsong=(index)=>{
    let key='';
    if(index===0){
      generatesong();
      return;
    }
    else if(index===1)
      {
        key="rock";
      }
      else if(index===2)
        {
          key="pop";
        }
        else if(index===3){
          key="jazz";
        }
        else if(index===4)
          {
            key="blues";
          }

          let newsongsarray = songsData.filter((song)=>{
            return(song.genre.key===key);
          })
          setfilteredDtata(newsongsarray);
  }
 const handleChangeIndex = async(newValue)=>{
  setValue(newValue);
  generatenewsong(newValue);
 }

  useEffect(()=>{
    generateTop();
    generateNew();
    generatesong();
  },[])



  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type='album' title='Top Albums' data={topAlbumns}/>
        <Section type='album' title='New Albums' data={newalbumns}/>
        <Filtersection type='song' title='Songs' value={value} filteredData={filteredData} handleChangeIndex={handleChangeIndex}/>
      </div>
    </div>
  );
}

export default App;
