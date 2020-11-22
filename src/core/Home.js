import React,{ Component } from "react";
import eastereggs from "../icons/basket.png";
class Home extends Component{
    constructor() {
        super();
        this.state = {
            eeg1:1,
            eeg2:1,
            eeg3:1,
            eeg4:1,
            egg:true,
            active:false
        };
    }
        
    onDragStart = (event, taskName) => {
    	console.log('dragstart on div: ', taskName);
    	event.dataTransfer.setData("taskName", taskName);
	}
	onDragOver = (event) => {
	    event.preventDefault();
	}

	onDrop = (event, cat) => {
	    let taskName = event.dataTransfer.getData("taskName");
        this.setState({eeg4:0});
        this.setState({egg:false})
    }
    
    toggling(){
        this.setState({active:!this.state.active});
        this.setState({eeg2:0})
        if(this.state.active===false){
            document.body.style='background:black; color:white';
        }
        else{
            document.body.style='background-color:white; color:black';
        }
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
                    <h2 onDoubleClick={()=>this.setState({eeg3:0})}className="text-info">Welcome to TweetSongs</h2>
                    <p className="lead">Find what songs on souncloud were tweeted the most recently or got most popular 
                        or which playlists or artists profile on Spotify were tweeted the most recently</p>
                    <p className="lead">Oh btw, we've got {" "}<a onClick={()=>this.setState({eeg1:0})}className="red-text"> {eegs} </a>{" "} 
                        more Easter Eggs for you to discover on this box</p>
                    <div className="float-right droppable" 
                        id="droptarget" 
                        onDragOver={(event)=>this.onDragOver(event)}
      			        onDrop={(event)=>{this.onDrop(event, "inProgress")}}>
                            <img src={eastereggs} alt="Easter Egg Basket" width="36em" height="36em"/>
                    </div>
                    <p className="lead">Find all Easter Eggs {" "}
                        <span className="draggable" draggable="true" onDragStart = {(event) => this.onDragStart(event, "egg")} >
                            {this.state.egg?"🥚":null} 
                        </span>
                    {" "}to find out our favorite song!!!</p>
                    <div className="float-right">
                        <label className="switch" v-if="option.icon && option.icon === 'mute'">
                        <input
                            type="checkbox"
                            checked={this.active}
                            onChange={()=>this.toggling()}           
                        />      
                        <span className="slider round"></span>
                        </label>
                    </div>
                    <p className="lead">Check out this not at all suspicious dark mode toggle!</p>
                </div>
            </div>
        );
    }
}

export default Home;