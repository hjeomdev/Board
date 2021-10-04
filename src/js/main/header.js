import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return (
        <div className="header">
            <Navbar>
                <Container>
                    <Navbar.Brand href="/posts">MEMO</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Link to="/new">
                            <Button variant="light" onClikck>새 글 작성</Button>
                        </Link>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;