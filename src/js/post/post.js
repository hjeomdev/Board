import React, { useState, useEffect }  from "react";

import { Link, useParams } from "react-router-dom"

import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/post.css'

import axios from 'axios';

const Post = () => {
    
    const params = useParams();
    const [deleteModal, setDeleteModal] = useState(false);
    const handleCloseDeleteModal = () => setDeleteModal(false);
    const handleShowDeleteModal = () => setDeleteModal(true);
    
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

    function deleteContent() {
        axios.delete('http://localhost:3000/posts/' + params.postId)
            .then((res) => {
                handleCloseDeleteModal();
                window.location.href="/posts";
            }).catch(error => {
                console.log(error.response)
            });
    }

    
    return (
        <div className="post">
            
            <div className="title">
                <h2>{post.title}</h2>
            </div>

            <div className="author">{post.author}</div>
            
            <div className="published_at">{post.published_at}</div>
            
            <Link to={`/new/${params.postId}`}>수정</Link>
            <Button onClick={handleShowDeleteModal}>삭제</Button>

            <div className="body">{post.body}</div>
            
            <div className="tags">
            <span className="tags">{post.tags} </span>
            {/* {post.tags && post.tags.length > -1 &&
                (post.tags.map(tag =>
                    (<span className="tags">{tag} </span>))
                )
            } */}
            </div>

            <div className="deleteModal">
                <Modal show={deleteModal} onHide={handleCloseDeleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>포스트 삭제</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>정말로 삭제하시겠습니까?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDeleteModal}>취소</Button>
                    <Button variant="primary" onClick={deleteContent}>삭제</Button>
                </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default Post;