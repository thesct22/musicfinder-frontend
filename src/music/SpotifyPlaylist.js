import React, { Component } from "react";
import { list } from "./apiMusic";
import { SemipolarLoading } from 'react-loadingg';

export class SpotifyPlaylistsRecent extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }
    
    loadPosts = () => {
        list("spotify/playlists/recent").then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ posts: data });
            }
        });
    };
    
    componentDidMount() {
        const site=this.props.match.params.site;
        const val=this.props.match.params.value;
        console.log(site,val);
        this.loadPosts(site,val);
    }

    renderPosts = posts => {
        console.log(posts);
        return (
            <div className="row">
                {Object.keys(posts).map((post, i) => {
                    const splink = post;
                    const occurance= posts[post];
                    
                    return (
                        <div className="card text-white bg-secondary mb-3 mr-3" key={i} style={{width: "20rem", height:"20rem"}}>
                            <div class="card-header">{occurance}/1000 tweets</div>
                            <div className="card-body">
                                <a className="card-text text-white" href={splink}>
                                    <p>{splink}</p>
                                </a>
                            </div>
                        </div>
                    );
                })}
                
            </div>
        );
        
    };

    render() {
        const { posts } = this.state;
        return (
            
            <div className="container">
                <div className="mt-5 mb-5">
                    {!Object.keys(posts).length? <SemipolarLoading size="large" style={{position:"relative", marginLeft:"auto",marginRight:"auto",bottom:10}} />:
                    <div className="h3-responsive">Recently tweeted Spotify Playlists</div>}
                </div>
                {this.renderPosts(posts)}
            </div>
        );
    }
}

export class SpotifyPlaylistsPopular extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }
    
    loadPosts = () => {
        list("spotify/playlists/popular").then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ posts: data });
            }
        });
    };
    
    componentDidMount() {
        const site=this.props.match.params.site;
        const val=this.props.match.params.value;
        console.log(site,val);
        this.loadPosts(site,val);
    }

    renderPosts = posts => {
        console.log(posts);
        return (
            <div className="row">
                {Object.keys(posts).map((post, i) => {
                    const splink = post;
                    const occurance= posts[post];
                    
                    return (
                        <div className="card text-white bg-secondary mb-3 mr-3" key={i} style={{width: "20rem", height:"20rem"}}>
                            <div class="card-header">{occurance}/1000 tweets</div>
                            <div className="card-body">
                                <a className="card-text text-white" href={splink}>
                                    <p>{splink}</p>
                                </a>
                            </div>
                        </div>
                    );
                })}
                
            </div>
        );
        
    };

    render() {
        const { posts } = this.state;
        return (
            <div className="container">
                <div className="mt-5 mb-5">
                    {!Object.keys(posts).length? <SemipolarLoading size="large" style={{position:"relative", marginLeft:"auto",marginRight:"auto",bottom:10}} />:
                        <div className="h3-responsive">Popular tweets with Spotify Playlists this week</div>}
                </div>
                {this.renderPosts(posts)}
            </div>
        );
    }
}

