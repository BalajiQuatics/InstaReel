import React, { useState, useRef, useEffect } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter.js";

function VideoCard({ channel, avatarSrc, url, song, likes, shares }) {
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);
	const videoRef = useRef(null);

	const onVideoPress = () => {
		if (isVideoPlaying) {
			videoRef.current.pause();
			setIsVideoPlaying(false);
		} else {
			videoRef.current.play();
			setIsVideoPlaying(true);
		}
	};
	useEffect(() => {
		var videos = document.querySelectorAll("video");
		// console.log(videos, 'll');
		for (var i = 0; i < videos.length; i++)
			videos[i].addEventListener(
				"play",
				function () {
					pauseAll(this);
				},
				true
			);

		function pauseAll(elem) {
			for (var i = 0; i < videos.length; i++) {
				//Is this the one we want to play?
				if (videos[i] == elem) continue;
				//Have we already played it && is it already paused?
				if (videos[i].played.length > 0 && !videos[i].paused) {
					// Then pause it now
					videos[i].pause();
				}
			}
		}
	});

	return (
		<div className="videoCard">
			<VideoHeader />
			<video
				
				ref={videoRef}
				onClick={onVideoPress}
				className="video-player"
				src={url}
				alt="reel video"
				loop
			/>
			<VideoFooter
				channel={channel}
				avatarSrc={avatarSrc}
				song={song}
				url={url}
				likes={likes}
				shares={shares}
			/>
		</div>
	);
}

export default VideoCard;
