import { Container } from "react-bootstrap";

const ProfileContainer = () => (
<Container>
    <br/>
    <h3>Background</h3>
    <p>2016~2019</p>
    <p>Seoul Digitech Highschool(Graduated)</p>

    <br/>
    <h3>Work Experience</h3>
    <p>2019~2021</p>
    <p>Secuve(QA Engineer)</p>
    <p>2021~</p>
    <p>Humanscacpe(Backend Engineer)</p>

    <br/>
    <h3>Projects</h3>
    <p><a href="https://github.com/Root-kjh/TodoList-SpringBoot">TodoList</a></p>
    <p>Backend, Frontend 개발(SpringBoot, JPA, Mysql, React)</p>
    <p>Rest API 형식의 TodoList웹 개발</p>
    <br/>
    <p><a href="https://github.com/Root-kjh/MemorialDay-Calendar">MemorialdayCalender</a></p>
    <p>Backend 개발(Django, Django-rest-framework)</p>
    <p>Rest API 형식의 기념일 저장 웹 개발, 기념일과 반복 주기를 저장해주는 기능</p>
    <br/>
    <p><a href="https://github.com/Root-kjh/RailsTest">RailsTest</a></p>
    <p>Backend 개발(Ruby on Rails)</p>
    <p>Rails를 활용한 간단한 CRUD 웹 개발(Rest API)</p>
    <br/>
    <p><a href="https://github.com/Root-kjh/TIL_to_blog">TIL_to_blog</a></p>
    <p>Frontend 개발(React, Typescript)</p>
    <p>홈서버 블로그 개발</p>
    <br/>
    <p><a href="https://github.com/Root-kjh/s_http_server">s_http_server</a></p>
    <p>전체 개발(python socket)</p>
    <p>json request body를 자동으로 dict로 변환시켜주고, dict형식의 response를 자동으로 json으로 변환해주는 http library 개발</p>
    <br/>

    <h3>Skills</h3>
    <h5>Good</h5>
        <p>Django</p>
    <h5>Average</h5>
        <p>Spring</p>
        <p>SpringBoot</p>
        <p>React</p>
        <p>Mysql</p>
        <p>Python</p>
        <p>Java</p>
    <h5>Bad</h5>
        <p>Ruby on Rails</p>
        <p>MongoDB</p>
        <p>Ruby</p>
        <p>PHP</p>
        <p>Javascript</p>
        <p>C</p>
        <p>Assembly</p>
        <p>TypeScript</p>
</Container>
);

export default ProfileContainer;