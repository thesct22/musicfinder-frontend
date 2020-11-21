import React, { Component } from "react";
import { list } from "./apiMusic";
import { BoxLoading } from 'react-loadingg';

export class SpotifyArtistRecent extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }
    
    loadPosts = () => {
        list("spotify/artists/recent").then(data => {
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
                        <div className="card col-md-4" key={i}>
                            <div className="card-body">
                                
                                <a className="card-text" href={splink}>
                                    {splink}
                                </a>
                                <br />
                                <p className="font-italic mark">
                                    Occures {" "} {occurance} {" "} times
                                </p>
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
                    {!Object.keys(posts).length? <BoxLoading />:"Recently tweeted Spotify Artists"}
                </div>
                {this.renderPosts(posts)}
            </div>
        );
    }
}

export class SpotifyArtistPopular extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }
    
    loadPosts = () => {
        list("spotify/artists/popular").then(data => {
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
                        <div className="card col-md-4" key={i}>
                            <div className="card-body">
                                
                                <a className="card-text" href={splink}>
                                    {splink}
                                </a>
                                <br />
                                <p className="font-italic mark">
                                    Occures {" "} {occurance} {" "} times
                                </p>
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
                    {!Object.keys(posts).length? <BoxLoading />:"Popular tweets on Spotify Artist6s this week"}
                </div>
                {this.renderPosts(posts)}
            </div>
        );
    }
}

