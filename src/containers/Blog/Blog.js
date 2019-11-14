import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from '../../containers/Blog/FullPost/FullPost';

class Blog extends Component {  
    render () {
        return (
            <div >
                <header>
                    <nav className="Blog">
                        <ul>
                            <li>
                                <NavLink 
                                to="/" 
                                exact 
                                activeClassName="my-active" 
                                activeStyle={{
                                    color:'#fa923f',
                                    textDecoration: 'underline'
                                }}
                                >Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname:'/new-post',
                                    hash: '#submit',
                                    search:'?quick-submit=true'
                                }}> New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}
                <Route path="/" exact component={Posts} />
                <Route path='/new-post' component={NewPost}/>
                <Route path='/:id' exact component={FullPost}/>          

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