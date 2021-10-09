import React from "react";
import { Card } from 'react-bootstrap';
import { useHistory } from "react-router";
import "../css/posts.css";

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

const images = [
    "https://cdn.pixabay.com/photo/2021/08/06/05/04/mountain-6525356_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/11/26/07/41/maine-coon-5778153_960_720.jpg",
    "https://cdn.pixabay.com/https://cdn.pixabay.com/photo/2021/09/21/14/56/leaves-6643792_960_720.jpg/2016/06/30/12/29/carnation-1488929_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/09/20/06/55/spaghetti-6639970_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/10/04/09/10/dog-6679822_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/09/12/15/58/coast-6618689_960_720.jpg"
]

function randomImg() {
    return images[Math.floor(Math.random() * images.length)];
}
    return(
        <Card id={id} onClick={detail}>
            <Card.Img variant="top" src= {randomImg()} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {body.slice(0,140)}
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