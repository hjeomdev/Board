import React, { useState, useEffect }  from "react";
import { Link, useParams } from "react-router-dom"
import axios from 'axios';

const Post = () => {
    
    const params = useParams();
    const [post, setPost] = useState({
        title: "",
        author: "",
        published_at: "",
        body: "",
        tags: []
    });

    useEffect(() => {
        function getContent() {
            axios.get('http://localhost:3000/posts/' + params.postId)
            .then((res) => {
                setPost({
                    title: res.data.title,
                    author: res.data.author,
                    published_at: res.data.published_at,
                    body: res.data.body,
                    tags: res.data.tags
                });
            }).catch(error => {
                console.log(error.response)
            });
        }
        getContent()
    }, []);

    
    return (
        <div className="post">
            
            <div className="title">
                <h2>{post.title}</h2>
            </div>

            <div className="author">{post.author}</div>
            
            <div className="published_at">{post.published_at}</div>
            
            <Link to={`/new/${params.postId}`}>수정</Link>
            <Link to={`/delete/${params.postId}`}>삭제</Link>

            <div className="body">{post.body}</div>
            
            <div className="tags">
            <span className="tags">{post.tags} </span>
            {/* {post.tags && post.tags.length > -1 &&
                (post.tags.map(tag =>
                    (<span className="tags">{tag} </span>))
                )
            } */}
            </div>
        </div>
    );
}

export default Post;