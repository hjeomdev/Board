import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './js/main/header';
import Main from "./js/main/main";
import Post from "./js/post/post";
import NewPost from "./js/post/newPost";
import NotFound from "./js/exceptionPage/notFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />  
        <Switch>
          <Route path="/posts/:postId" component={Post}/>
          <Route path="/posts" component={Main}/>  
          <Route path="/new/:postId" component={NewPost}/>
          <Route path="/new" component={NewPost}/>
          <Route path="/delete"/>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
