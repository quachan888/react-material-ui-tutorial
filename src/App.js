import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";

function App() {
    return (
        <div className="App">
            <Button href="#" variant="contained" color="secondary" size="large">
                Click me
            </Button>
            <Button variant="outlined" color="success" size="small">
                Click me
            </Button>
        </div>
    );
}

export default App;
