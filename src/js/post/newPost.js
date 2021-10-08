import React, { useState, useEffect }  from "react";
import { useParams, useHistory } from "react-router-dom"
import axios from 'axios';

import Tag from './tag';

import { Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/newPost.css'

function NewPost() {

    let { postId } = useParams();

    let history = useHistory();
    
    const [newOrNotFlag, setNewOrNotFlag] = useState(true); //새글 이면 true, 수정이면 false

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [published_at, setPublished_at] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState("");

    const [tempTag, setTempTag] = useState("");

    useEffect(() => {
        if (postId != null) { //postId 파라미터가 있음
            setNewOrNotFlag(false);
            loadSavedData();
        } 
        
        function loadSavedData() {
            axios.get('http://localhost:3000/posts/' + postId)
            .then((res) => {
                setTitle(res.data.title);
                setAuthor(res.data.author);
                setPublished_at(res.data.published_at);
                setBody(res.data.body);
                setTags(res.data.tags);
                // console.log(res);
            }).catch(error => {
                console.log(error.response)
            });
        }
    }, [postId]); 

    function saveNewData() {
        let newData = {title: title, author: author, published_at: new Date().toLocaleString(), body: body, tags: tags};

        if (newOrNotFlag === false) {
            axios.put('http://localhost:3000/posts/' + postId, newData)
            .then(() => {
                history.push(`/posts/${postId}`);
            }).catch(error => {
                console.log(error.response)
            });
        } else {
            axios.post('http://localhost:3000/posts', newData)
            .then((res) => {
                console.log(res);
                history.push(`/posts/${res.data.id}`);
            }).catch(error => {
                console.log(error.response)
            });
        }
        
    }

    function deleteTag(id) {
        
        let temp = tags.slice();
        
        temp.splice(id, 1);
        // console.log(temp);
        setTags(temp);
    }

    function submitButton() {
        if(newOrNotFlag === true) {
            return "출간하기";
        } else {
            return "수정하기";
        }
    }

    return (
        
        <Form className="newPost" onSubmit={saveNewData}>
            <Form.Group className="formTitle">
                <Form.Control type="text" size="lg" placeholder="제목을 입력하세요" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            </Form.Group>

            <Form.Group className="formAuthor">
                <Form.Control type="text" placeholder="작성자 이름을 입력하세요" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
            </Form.Group>

            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} 
                    overlay={
                    <Tooltip id="button-tooltip-2">
                        스페이스바로 태그를 등록할 수 있습니다.
                    </Tooltip>
                } >
            <div className="formTags">
                <span className="tags">
                { tags && tags.length > -1 ? 
                    tags.map((tag, i) => <Tag key={i} tag={tag} tagId={tags.indexOf(tag)} postOrNot={false} deleteTag={deleteTag}/>) : ('') 
                }
                </span>

                <Form.Group className="newTags">
                    <Form.Control type="text" placeholder="태그를 입력하세요" value={tempTag} 
                        onKeyPress={(e) => {
                            if (e.code === 'Space') {
                                setTags([...tags, tempTag]);
                                setTempTag("");
                            }
                        }} onChange={(e) => setTempTag(e.target.value)} />
                </Form.Group>
            </div>
            </OverlayTrigger>

            <Form.Group className="formBody">
                <Form.Control as="textarea" placeholder="당신의 이야기를 적어보세요..." rows={20} value={body} onChange={(e) => setBody(e.target.value)} required/>
            </Form.Group>

            <Button variant="primary" type="submit" className="formSubmit">{submitButton()}</Button>
        </Form>

    );
}

export default NewPost;