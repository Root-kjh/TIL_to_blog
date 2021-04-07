import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import queryString from 'query-string';
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

const DocContainer = (props: any) => {
    const { search } = props.location;
    const { path } = queryString.parse(search);
    const [fileType, setFileType] = useState("");
    const [fileList, setFileList] = useState([]);
    const [context, setContext] = useState("");

    const renderers = {
        code: (props: any) => {
            console.log(props.language);
            console.log(props.value);
            return <SyntaxHighlighter language={props.language} children={props.value}/>
        }
    };

    const fileListStyle = {
        margin: '0 auto',
        marginTop: '100px',
        width: '50%',
    };

    const contextStyle = {
        margin: '0 auto',
        marginTop: '50px',
        width: '80%',
    };

    useEffect(() => {axios.post('http://kjh-projects.kro.kr:8100/TIL/explorer/', {path: path})
        .then(response => {
            if (response.data.file_type === "folder"){
                const files = response.data.file_context.map((file: any) =><ListGroup.Item action href={"/docs?path="+file.file_path}>{file.file_name}</ListGroup.Item>);
                setFileList(files);
                setFileType("folder");
            }
            else {
                setFileType("file");
                setContext(response.data.file_context);
            }
        })},[]);  
    if (fileType==="folder"){
        return(<ListGroup style={fileListStyle}>{fileList}</ListGroup>);
    }
    else{
        return(<div style={contextStyle}><ReactMarkdown renderers={renderers} children={context}/></div>);
    }
}

export default DocContainer;