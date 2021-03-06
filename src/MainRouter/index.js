import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../core/Home";
 import Menu from "../core/Menu";
import {SpotifyArtistRecent,SpotifyArtistPopular} from "../music/SpotifyArtist.js";
import {SpotifyPlaylistsPopular,SpotifyPlaylistsRecent} from "../music/SpotifyPlaylist.js";
import {SoundcloudPopular,SoundcloudRecent} from "../music/SoundcloudSongs.js";
const MainRouter = () => (
    <div>
        <Menu />
        <Home/>
        <Switch>
            <Route exact path="/" />
            <Route exact path="/musicfinder-frontend/spotify/artists/recent" component={SpotifyArtistRecent} />
            <Route exact path="/musicfinder-frontend/spotify/artists/popular" component={SpotifyArtistPopular} />
            <Route exact path="/musicfinder-frontend/spotify/playlists/recent" component={SpotifyPlaylistsRecent} />
            <Route exact path="/musicfinder-frontend/spotify/playlists/popular" component={SpotifyPlaylistsPopular} />
            <Route exact path="/musicfinder-frontend/soundcloud/recent" component={SoundcloudRecent} />
            <Route exact path="/musicfinder-frontend/soundcloud/popular" component={SoundcloudPopular} />
        </Switch>
        
    </div>
);
export default MainRouter;