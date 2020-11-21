import React,{ Component } from "react";

class Home extends Component{
    constructor() {
        super();
        this.state = {
            eeg1:0,
            eeg2:0,
            eeg3:0,
            eeg4:0
        };
    }
    componentDidMount() {
        this.setState({eeg1:1,eeg2:1,eeg3:1,eeg4:1});
    }
    render(){
        var {eeg1,eeg2,eeg3,eeg4}=this.state;
        var eegs=eeg1+eeg2+eeg3+eeg4;
        return(
            <div>
                <div className="mt-5 pt-5 px-5 container border border-info">
                    <h2>Welcome to TweetSongs</h2>
                    <p className="lead">Find what songs on souncloud were tweeted the most recently or got most popular 
                        or which playlists or artists profile on Spotify were tweeted the most recently</p>
                    <p className="lead">Oh btw, we've got {" "}<a onClick={()=>this.setState({eeg1:0})}className="red-text"> {eegs} </a>{" "} more Easter Eggs for you to discover</p>
                    <p className="lead">Find all Easter Eggs to find out our favorite song!!!</p>
                </div>
            </div>
        );
    }
}

export default Home;