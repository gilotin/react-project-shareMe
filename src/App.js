import { Navigation } from "./components/Navigation";
import { ImageCards } from "./components/ImageCards";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
    return (
        <>
            <Navigation />
                <Home/>
                <Register/>
            <ImageCards/>
        </>
    );
}

export default App;
