import React from "react";
import "./VideoFooter.css";
import { Avatar, Button } from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SendIcon from "@material-ui/icons/Send";
import Ticker from "react-ticker";

function VideoFooter({ channel, avatarSrc, url, song, likes, shares }) {
	return (
		<div className="videoFooter">
			<div className="videoFooter-text">
				<Avatar src={avatarSrc} />
				<h3>
					{channel} . <Button>Follow</Button>{" "}
				</h3>
			</div>
			<div className="videoFooter-ticker">
				<MusicNoteIcon className="videoFooter-icon" />
				<Ticker mode="smooth">{({ index }) => <h1>{song}</h1>}</Ticker>
			</div>

			<div className="videoFooter-actions">
				<div className="videoFooter-actionsLeft">
					<FavoriteIcon fontSize="small" />
					<ModeCommentIcon fontSize="small" />
					<SendIcon fontSize="small" />
					<MoreHorizIcon fontSize="small" />
				</div>
				<div className="videoFooter-actionsRight">
					<div className="videoFooter-stat">
						<FavoriteIcon />
						<p>{likes}</p>
					</div>
					<div className="videoFooter-stat">
						<ModeCommentIcon />
						<p>{shares}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default VideoFooter;
