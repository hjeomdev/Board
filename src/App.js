import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./js/main/main";
import Post from "./js/post/post";
import newPost from "./js/post/newPost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/posts" component={Main}/>
          <Route path="/posts/:postId" component={Post}/>
          <Route path="/new" component={newPost}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
