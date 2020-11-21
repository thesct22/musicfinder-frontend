import React, { Component } from "react";
import { list } from "./apiMusic";
import { BoxLoading } from 'react-loadingg';

export class SoundcloudRecent extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }
    
    loadPosts = () => {
        list("soundcloud/recent").then(data => {
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
                    {!posts.length? <BoxLoading />:"Recently tweeted Soundcloud Songs"}
                </div>
                {this.renderPosts(posts)}
            </div>
        );
    }
}

export class SoundcloudPopular extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }
    
    loadPosts = () => {
        list("soundcloud/popular").then(data => {
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
                    {!posts.length? <BoxLoading />:"popular tweets on Soundcloud Songs this week"}
                </div>
                {this.renderPosts(posts)}
            </div>
        );
    }
}

