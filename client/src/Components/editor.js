import React from 'react';
import { makeStyles } from '@mui/styles';
import Prism from "prismjs";
import { Button } from '@mui/material';
import "prismjs/themes/prism.min.css";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        width: "99%",
        position: "relative",
        display: "block",
        fontFamily: "monospace",
        lineHeight: 1,
        fontSize: "0.8rem",
        backgroundColor: "#f5f2f0",
        display: "flex",
    },
    textarea: {
        backgroundColor: "transparent",
        color: "transparent",
        caretColor: "black",
        margin: "0px",
        fontFamily: "inherit",
        lineHeight: 1.5,
        fontSize: "1rem",
        width: "99%",
        border: "none",
        outline: "none",
        resize: "none",
        height: "100%",
        top: "0px",
        left: "0px",
        position: "relative",
        opacity: 1
    },
    code: {
        pointerEvents: "none",
        zIndex: 3,
        margin: "0",
        overflowY: "auto",
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        fontFamily: "inherit",
        lineHeight: 1.5,
        fontSize: "1rem",
        backgroundColor: "transparent",
    }
}))

const Editor = (props) => {
    const classes = useStyles();
    const [codeContent, setCodeContent] = React.useState(props.code);
    const [language, setLanguage] = React.useState("javascript");

    const handleCodeCompile = () => {
        const URL = "http://localhost:8000/compile";
        props.handleLoadingState(true);
        axios.post(URL, {
            code: codeContent,
            language: "java",
            input: ""
        })
            .then((res) => {
                props.handleSetOutput(res.data.output);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                props.handleLoadingState(false);
            })
    }

    return (
        <React.Fragment>
            <div className={classes.root}>
                <textarea
                    className={classes.textarea}
                    spellCheck={false}
                    value={codeContent}
                    onChange={e => setCodeContent(e.target.value)}
                />
                <pre
                    className={`${classes.code} line-numbers`}
                    dangerouslySetInnerHTML={{
                        __html: Prism.highlight(codeContent, Prism.languages[language])
                    }}

                />
                <Button variant='contained' onClick={() => handleCodeCompile()}>RUN</Button></div>
        </React.Fragment>

    )
}
export default Editor;