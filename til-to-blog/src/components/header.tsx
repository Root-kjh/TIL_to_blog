import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React from 'react';

class Header extends React.Component{
    render(){
        var fs = require('fs');
        var folders: Array<string>;
        fs.readdir('/TIL', function(err: any, filelist: any){
            folders = filelist;
        })
        return(
            <Navbar bg="light" variant="light" sticky="top" >
            <Navbar.Brand>JongHyun's tech blog</Navbar.Brand>
            <Nav className="mr-auto">
                <NavDropdown title="posts" id="basic-nav-dropdown">
                    {/* scraping in til root folders*/}
                    console.log(folders);
                    <NavDropdown.Item href="#">Database</NavDropdown.Item>
                    <NavDropdown.Item href="#">Django</NavDropdown.Item>
                    <NavDropdown.Item href="#">Docker</NavDropdown.Item>
                    <NavDropdown.Item href="#">Flask</NavDropdown.Item>
                    <NavDropdown.Item href="#">Github</NavDropdown.Item>
                    <NavDropdown.Item href="#">Math</NavDropdown.Item>
                    <NavDropdown.Item href="#">Network</NavDropdown.Item>
                    <NavDropdown.Item href="#">OS</NavDropdown.Item>
                    <NavDropdown.Item href="#">Programming</NavDropdown.Item>
                    <NavDropdown.Item href="#">Spring</NavDropdown.Item>
                    <NavDropdown.Item href="#">Testing</NavDropdown.Item>
                    <NavDropdown.Item href="#">Typescript</NavDropdown.Item>
                    <NavDropdown.Item href="#">WEB</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="https://github.com/Root-kjh/">github</Nav.Link>
                <Nav.Link href="https://www.acmicpc.net/user/kjh3141">Baekjoon</Nav.Link>
                <Nav.Link href="http://kjh-projects.kro.kr/">HomeServer</Nav.Link>
                <Nav.Link href="mailto:wldnro3141@gmail.com">Gmail</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="search post" className="mr-sm-2"/>
                <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>
        )   
    }
};

export default Header;