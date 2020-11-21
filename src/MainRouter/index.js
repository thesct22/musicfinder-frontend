import React from "react";
import { Route, Switch } from "react-router-dom";
// import Home from "../core/Home";
// import Menu from "../core/Menu";
import SpotifyArtistRecent from "../music/SpotifyArtistRecent.js";
// import {sfpr,sfpp} from "../music/SpotifyPlaylist.js";
// import {scr,scp} from "../music/SoundcloudSongs.js";
const MainRouter = () => (
    <div>
        {/* <Menu /> */}
        <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/:music" component={SpotifyArtistRecent} />
            {/* <Route exact path="/spotify/artists/popular" component={sfap} />
            <Route exact path="/spotify/playlists/recent" component={sfpr} />
            <Route exact path="/spotify/playlists/popular" component={sfpp} />
            <Route exact path="/soundcloud/recent" component={scr} />
            <Route exact path="/soundcloud/popular" component={scp} /> */}
        </Switch>
        
    </div>
);
export default MainRouter;