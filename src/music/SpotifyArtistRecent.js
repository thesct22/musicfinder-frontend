import React, { Component } from "react";
import { list } from "./apiMusic";

export class SpotifyArtistRecent extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }
    
    loadPosts = (music) => {
        list(music).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ posts: data });
            }
        });
    };
    
    componentDidMount() {
        const music=this.props.match.params.music;
        this.loadPosts(music);
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
                {this.renderPosts(posts)}
            </div>
        );
    }
}

export default SpotifyArtistRecent;
