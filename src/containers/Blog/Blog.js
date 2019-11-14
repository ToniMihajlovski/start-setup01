import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import './Blog.css';
import Posts from './Posts/Posts';
//import axios from 'axios';

class Blog extends Component {
    
    render () {
        return (
            <div >
                <header>
                    <nav className="Blog">
                        <ul>
                            <li>
                                <a href='/'>Home</a>
                            </li>
                            <li>
                                <a href='/new-post'>New Post</a>
                            </li>
                            <li>
                                <a href='/'>Home</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Posts />
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;