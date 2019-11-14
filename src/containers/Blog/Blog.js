import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';

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
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}
                <Route path="/" exact component={Posts} />
           
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