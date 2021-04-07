import { Button, Form, FormControl, ListGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fileURLToPath } from 'node:url';

const Header = () =>{
    const [fileList, setFileList] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const searchStyle = {
        position: "absolute",
        right:10,
        width:250,
    } as React.CSSProperties;
    const searchKeyworrd = (e: any) => {
        axios.post('http://kjh-projects.kro.kr:8100/TIL/search/', {keyword: e.target.value})
            .then(response => {
                setSearchList(response.data.file_list.map((file: any) => <ListGroup.Item action href={"/docs?path="+file.file_path}>{file.file_name}</ListGroup.Item>))
            });
    };

    useEffect(() => {axios.post('http://kjh-projects.kro.kr:8100/TIL/explorer/', {path: "/"})
    .then(response => {
        setFileList(response.data.file_context.map((file: any) => <NavDropdown.Item href={"/docs?path="+file.file_path}>{file.file_name}</NavDropdown.Item>));
    })},[]);

    return(
        <div>
        <Navbar bg="light" variant="light" sticky="top" >
            <Navbar.Brand href="/">JongHyun's tech blog</Navbar.Brand>
            <Nav className="mr-auto">
                <NavDropdown title="posts" id="basic-nav-dropdown">
                    {fileList}
                </NavDropdown>
                <Nav.Link href="https://github.com/Root-kjh/">github</Nav.Link>
                <Nav.Link href="https://www.acmicpc.net/user/kjh3141">Baekjoon</Nav.Link>
                <Nav.Link href="http://kjh-projects.kro.kr/">HomeServer</Nav.Link>
                <Nav.Link href="mailto:wldnro3141@gmail.com">Gmail</Nav.Link>
            </Nav>
            <Form inline>
                    <FormControl type="text" placeholder="search post" className="mr-sm-2" onChange={searchKeyworrd}/>
            </Form>
        </Navbar>
                    <div style={searchStyle}>{searchList}</div>
        </div>
    )}

export default Header;