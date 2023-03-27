import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import * as photoService from "./services/photoService";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./components/Home/Home";
import { Register } from "./components/RegisterForm/Register";
import { Login } from "./components/LoginForm/Login";
import { Search } from "./components/Search/Search";
import { Catalog } from "./components/Catalog/Catalog";
import { Profile } from "./components/Profile/Profile";
import { CreateImage } from "./components/Profile/Create/CreateImage";
import { DetailPage } from "./components/DetailsPage/DetailsPage";
import { AuthContext } from "./contexts/AuthContext";

function App() {
    const [photos, setPhotos] = useState([]);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        photoService.getAll().then((result) => {
            setPhotos(result);
        });
    }, []);

    async function onLoginSubmit(data) {
        console.log(data);
    }

    return (
        <AuthContext.Provider value={{ onLoginSubmit }}>
            <div className="background">
                <Navigation />
                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/catalog" element={<Catalog photos={photos} />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/profile/CreateImage" element={<CreateImage />} />
                        <Route path="catalog/:photoId/" element={<DetailPage />} />
                    </Routes>
                </main>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
