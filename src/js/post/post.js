import React, { useState, useEffect }  from "react";
import axios from 'axios';

function Post() {
    
    const postId = useState(window.location.pathname.slice(6));
    const [post, setPost] = useState([]);

    useEffect(
        () => {
            getContent();
        }, []
    );

    function getContent() {
        console.log("ehll")
        axios.get('http://localhost:3000/posts/' + postId)
        .then(function (res) {
            setPost(res);
        }).catch(error => {
            console.log(error.response)
        });
    };

    return (
        <div className="post">
            dd
        </div>
    );
}

export default Post;