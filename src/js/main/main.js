import React, { useState, useEffect }  from "react";
import axios from 'axios';
import Post from "./post.js";
import { CardGroup } from "react-bootstrap";

function Main() {
    const [posts, setPost] = useState("");

    useEffect(() =>{
        axios.get("http://localhost:3001/posts")
            .then(res => setPost(res.data))
    }, []);

    return (
        <div className="container">
        <CardGroup>
            {[...posts].map(post => (
                <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    date={post.published_at}
                    author={post.author}
                />
            ))}
        </CardGroup>
        </div>
    );
}

export default Main;