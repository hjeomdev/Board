import React from "react";
import { Card } from 'react-bootstrap';
import { useHistory } from "react-router";

// 년월일 format 함수
function makeYYYYMMDD(date){
    let target = new Date(date)
    let year = target.getFullYear();
    let month = target.getMonth() + 1;
    let day = target.getDate();
    return `${year}년 ${month}월 ${day}일`;
}

function Post({id, title, body, author, date}){
    // 게시글 클릭 시 상세페이지 이동 
    const history = useHistory();
    const detail = () => {
        history.push(`/posts/${id}`)
    }

    // 0일전 함수
    const today = new Date();
    const timeValue = new Date(date);
    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 8){
        date = `${betweenTimeDay}일전`
    } else {
        date = makeYYYYMMDD(date);
    }

    return(
        <Card id={id} onClick={detail}>
            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/03/28/22/55/night-photograph-2183637_960_720.jpg" />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {body.slice(0,140)}...
            </Card.Text>
            <small>{date}</small>
            </Card.Body>
            <Card.Footer>
            <small>{author}</small>
            </Card.Footer>
        </Card>
    )
}

export default Post;