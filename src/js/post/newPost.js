import React, { useState, useEffect }  from "react";
import { useParams } from "react-router-dom"
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

function NewPost() {

    const params = useParams();
    const [flag, setFlag] = useState(false);

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [published_at, setPublished_at] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState("");

    useEffect(() => {
        function loadSavedData() {
            axios.get('http://localhost:3000/posts/' + params.postId)
            .then((res) => {
                setTitle(res.data.title);
                setAuthor(res.data.author);
                setPublished_at(res.data.published_at);
                setBody(res.data.body);
                setTags(res.data.tags);
            }).catch(error => {
                console.log(error.response)
            });
        }

        if (params.postId != null) { //postId 파라미터가 없음
            setFlag(true);
            loadSavedData();
        } 
    }, []); 

    function saveNewData() {
        let newData = {title: title, author: author, published_at: published_at, body: body, tags: tags};

        if (flag == true) {
            axios.put('http://localhost:3000/posts/' + params.postId, newData)
            .then((res) => {
                window.location.href="/posts/" + params.postId;
                console.log(title);
            }).catch(error => {
                console.log(error.response)
            });
        } else {
            axios.post('http://localhost:3000/posts', newData)
            .then((res) => {
                window.location.href="/posts/"+res.data.id;
            }).catch(error => {
                console.log(error.response)
            });
        }
        
    }

    return (
        
        <div className="newPost">
        <Form onSubmit={saveNewData}>
            <Form.Group controlId="formTitle">
                <Form.Label>제목</Form.Label>
                <Form.Control type="text" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formAuthor">
                <Form.Label>작성자</Form.Label>
                <Form.Control type="text" placeholder="작성자" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </Form.Group>
            
            <Form.Group controlId="formTitle">
                <Form.Label>작성일</Form.Label>
                <Form.Control type="text" placeholder="작성일" value={published_at} onChange={(e) => setPublished_at(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formTitle">
                <Form.Label>내용</Form.Label>
                <Form.Control type="text" placeholder="내용" value={body} onChange={(e) => setBody(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formTitle">
                <Form.Label>태그</Form.Label>
                <Form.Control type="text" placeholder="태그" value={tags} onChange={(e) => setTags(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    );
}

export default NewPost;