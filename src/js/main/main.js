import React, { useState, useEffect }  from "react";
import axios from 'axios';
import Post from "./post.js";
import Paging from './paging';
import { CardGroup } from "react-bootstrap";

function Main() {
    const [posts, setPost] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 12;
    console.log(posts.length)
    
    useEffect(() =>{
        async function fetchDate() {
            const response = await axios.get("http://localhost:3001/posts");
            setPost(response.data);
        }
        fetchDate();
    }, []);

    // Paging
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    function currentPosts(tmp) {
        let currentPosts = [];
        currentPosts = tmp.slice(indexOfFirst, indexOfLast);
        return [...currentPosts];
    }
    return (
        <div className="container">
        <CardGroup>
            {currentPosts(posts).map(post => (
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
        <Paging postsPerPage={postsPerPage} totalPosts={posts.length} currentPage={currentPage} paginate={setCurrentPage}></Paging>
        </div>
    );
}

export default Main;