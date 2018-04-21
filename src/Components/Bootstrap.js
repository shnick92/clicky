import React from 'react';
import Wrapper from "./Wrapper";
import FriendCard from "./FriendCard";
import friends from "./friends.json";

const styles = {
	fontSize: "18px",
	color: "white",
};

// const cardStyle = {
// 	background: "#fff",
//   	borderRadius: "2px",
//   	height: "325px",
//   	margin: "1rem",
//   	position: "relative",
//   	width: "325px",
//   	boxShadow: "0 3px 6px #999, 0 3px 6px #999",
//   	textAlign: "left",
// }

const Bootstrap = () => (

<div className="container">
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#" style={styles}>Clicky Game!</a>
    </div>
    <div>
    	<span className="navbar-text" style={styles}>
    		Click each tile once to win!
  		</span>
  	</div>
  	<div>
    	<span className="navbar-text" style={styles}>
    		Total: {}   | Top Score: {}
  		</span>
  	</div>
  </div>
</nav>
	<Wrapper>
    <FriendCard
      image={friends[0].image}
    />
    <FriendCard
      image={friends[1].image}
    />
    <FriendCard
      image={friends[2].image}
    />
  </Wrapper>
 </div>
);

export default Bootstrap;