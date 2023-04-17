import React, { useState, useRef } from "react";
//components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
//styles
import './styles/app.scss';
//util
import data from './data';


function App() {
  //Ref
  const audioRef = useRef(null);
  // State 
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  })
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  // events
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //calculatae percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round((roundedCurrent / roundedDuration) * 100)
    setSongInfo({...songInfo, currentTime: current, duration, animationPercentage: animationPercentage})
  }
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    setTimeout(() => {
      if(isPlaying) audioRef.current.play();
    }, "10");
  }
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player 
        songs={songs}
        setSongs={setSongs}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying} 
        isPlaying={isPlaying} 
        currentSong={currentSong} 
        setCurrentSong={setCurrentSong}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library libraryStatus={libraryStatus} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} setSongs={setSongs}/>
      <audio onEnded={songEndHandler} onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
