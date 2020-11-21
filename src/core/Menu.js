import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import "../toggle.css";
const isActive = (history, path) => {
    if (history.location.pathname === path) return { color: "#ff9900" };
    else return { color: "#ffffff" };
};

const Menu = ({ history }) => {
    const [active, handleClick] = useState(false);
    const toggling =()=>{
        handleClick(!active)
    }
    return(
        <nav className="navbar navbar-dark bg-primary">
        
            <ul className="nav">
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/")}
                        to="/"
                    >
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/soundcloud/recent")}
                        to="/soundcloud/recent"
                    >
                        Recent Soundcloud
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/soundcloud/popular")}
                        to="/soundcloud/popular"
                    >
                        Popular Soundcloud
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/spotify/artists/recent")}
                        to="/spotify/artists/recent"
                    >
                        Recent Spotify Artists
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/spotify/artists/popular")}
                        to="/spotify/artists/popular"
                    >
                        Popular Spotify Artists
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/spotify/playlists/recent")}
                        to="/spotify/playlists/recent"
                    >
                        Recent Spotify Playlists
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/spotify/playlists/popular")}
                        to="/spotify/playlists/popular"
                    >
                        Popular Spotify Playlists
                    </Link>
                </li> 
            </ul>
            <div className="ml-auto">
            <label className="switch" v-if="option.icon && option.icon === 'mute'">
            <input
                type="checkbox"
                checked={active}
                onChange={()=>toggling()}           
            />      
            <span className="slider round"></span>
            </label>
            </div>
        </nav>
    )
}

export default withRouter(Menu);
