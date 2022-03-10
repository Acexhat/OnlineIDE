import Dashboard from './Pages/dashboard';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw"
  }
}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Dashboard />
    </div>
  );
}

export default App;
