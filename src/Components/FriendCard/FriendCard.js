import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
	<div className="card">
		<div className="img-container">
			<img alt={props.name} src={props.image} onClick={() => props.onClick()}/>
		</div>
		<div className="content" />
	</div>
);

export default FriendCard;