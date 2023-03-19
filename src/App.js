import { Navigation } from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { ImageCards } from "./components/ImageCards";

function App() {
    return (
        <>
            <Navigation />

            <ImageCards/>
        </>
    );
}

export default App;
