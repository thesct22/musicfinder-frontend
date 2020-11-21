import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../core/Home";
import Menu from "../core/Menu";
import {sfar,sfap} from "../music/SpotifyArtist";
import {sfpr,sfpp} from "../music/SpotifyPlaylist";
import {scr,scp} from "../music/SoundcloudSongs";
const MainRouter = () => (
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/spotify/artists/recent" component={sfar} />
            <Route exact path="/spotify/artists/popular" component={sfap} />
            <Route exact path="/spotify/playlists/recent" component={sfpr} />
            <Route exact path="/spotify/playlists/popular" component={sfpp} />
            <Route exact path="/soundcloud/recent" component={scr} />
            <Route exact path="/soundcloud/popular" component={scp} />
        </Switch>
        
    </div>
);
export default MainRouter;