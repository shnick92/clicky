import React from "react";
import Wrapper from "./Components/Wrapper";
import FriendCard from "./Components/FriendCard/FriendCard";
import friends from "./Components/friends.json";
// import Bootstrap from "./Components/Bootstrap";

const App = () => <Scoring />;


const styles = {
	fontSize: "18px",
	color: "white",
};

class Scoring extends React.Component {
	state = {
		count: 0
	};

	handleIncrement = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render () {
		return(
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
			Total: {this.state.count}   | Top Score: {}
			</span>
			</div>
			</div>
			</nav>
			<Wrapper>
			<FriendCard
			image={friends[0].image} onClick={this.handleIncrement}
			/>
			<FriendCard
			image={friends[1].image} onClick={this.handleIncrement}
			/>
			<FriendCard
			image={friends[2].image} onClick={this.handleIncrement}
			/>
			<FriendCard
			image={friends[3].image} onClick={this.handleIncrement}
			/>
			<FriendCard
			image={friends[4].image} onClick={this.handleIncrement}
			/>
			<FriendCard
			image={friends[5].image} onClick={this.handleIncrement}
			/>
			<FriendCard
			image={friends[6].image} onClick={this.handleIncrement}
			/>
			<FriendCard
			image={friends[7].image} onClick={this.handleIncrement}
			/>
			<FriendCard
			image={friends[8].image} onClick={this.handleIncrement}
			/>
			</Wrapper>
			</div>
			);
	};
};

export default App;