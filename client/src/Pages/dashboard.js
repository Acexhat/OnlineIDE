import React from 'react';
import { makeStyles } from '@mui/styles';
import Editor from '../Components/editor';
import Output from '../Components/output';
import { Backdrop } from '@mui/material';
import CircularLoader from '../Atomic/loader';


const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    editor: {
        height: "60%",
        width: "100%",
    },
    output: {
        height: "40%",
        width: "100%"
    }
}))

const defaultCode = `
    public class Main {
        public static void main(String args[]) {
        int x=10;
        int y=25;
        int z=x+y;

        System.out.println("Sum of x+y = " + z);
        }
    }
`

const Dashboard = () => {
    const classes = useStyles();
    const [op, setOp] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleSetOutput = (value) => {
        setOp(value);
    }

    const handleLoadingState = (state) => {
        setLoading(state)
    }

    return (
        <div className={classes.root}>
            ---JAVA ONLINE IDE---
            <div className={classes.editor}> <Editor code={defaultCode} handleSetOutput={handleSetOutput} handleLoadingState={handleLoadingState} /></div>
            <div className={classes.output}> <Output output={op} /></div>
            {loading ? <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularLoader />
            </Backdrop> : null}
        </div>
    )
}
export default Dashboard;