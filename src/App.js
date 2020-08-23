import React, { useState, useEffect } from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import db from "./firebase";

function App() {
	const [reels, setReels] = useState([]);

	useEffect(() => {
		// app will run only once and never loads again
    db.collection('firstdb').onSnapshot(snapshot =>{
// console.log(snapshot.docs);
      setReels(
        snapshot.docs.map((doc) => 
         doc.data()
        )
        ) 
      }
		);
	}, []);

	return (
    <div className="app">
			<div className="app-top">
				{/* Image at top */}
				<img className="app-logo" src={require("./assets/images/logo.webp")} alt="logo" />
				
				{/* scrollable video container */}
			</div>
			<div className="app-videos">
        {reels.map(({channel, avatarSrc, url, song, likes, shares})=>(
          
          <VideoCard
					channel={channel}
					avatarSrc={avatarSrc}
					song={song}
					url={url}
					likes={likes}
					shares={shares}
          />
			
          ))}
			</div>
		</div>
	);
}

export default App;
