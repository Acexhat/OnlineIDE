import React from 'react';
import { makeStyles } from '@mui/styles';
import Prism from 'prismjs';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        color:"#FFFFFF"
    },
    inner_div: {
        backgroundColor: "black",
        width:"80%",
        height:"80%"
    }
}))

const Output = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.inner_div}>
                Code Output:
                <br />
                <pre>
                    <code>{props.output}</code>
                </pre>
            </div>
        </div>
    )
}
export default Output;