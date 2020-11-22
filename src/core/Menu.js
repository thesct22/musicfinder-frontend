import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../toggle.css";
const isActive = (history, path) => {
    if (history.location.pathname === path) return { color: "#000000" };
    else return { color: "#ffffff" };
};

const Menu = ({ history }) => {
    return(
        <nav className="navbar navbar-dark bg-primary">
        
            <ul className="nav">
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/musicfinder-frontend")}
                        to="/musicfinder-frontend/"
                    >
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/musicfinder-frontend/soundcloud/recent")}
                        to="/musicfinder-frontend/soundcloud/recent"
                    >
                        Recent Soundcloud
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/musicfinder-frontend/soundcloud/popular")}
                        to="/musicfinder-frontend/soundcloud/popular"
                    >
                        Popular Soundcloud
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/musicfinder-frontend/spotify/artists/recent")}
                        to="/musicfinder-frontend/spotify/artists/recent"
                    >
                        Recent Spotify Artists
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/musicfinder-frontend/spotify/artists/popular")}
                        to="/musicfinder-frontend/spotify/artists/popular"
                    >
                        Popular Spotify Artists
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/musicfinder-frontend/spotify/playlists/recent")}
                        to="/musicfinder-frontend/spotify/playlists/recent"
                    >
                        Recent Spotify Playlists
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/musicfinder-frontend/spotify/playlists/popular")}
                        to="/musicfinder-frontend/spotify/playlists/popular"
                    >
                        Popular Spotify Playlists
                    </Link>
                </li> 
            </ul>
            
        </nav>
    )
}

export default withRouter(Menu);
