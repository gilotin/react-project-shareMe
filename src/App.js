import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import * as authService from "./services/authService";

function App() {
    const navigate = useNavigate();
    const [photos, setPhotos] = useState([]);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        photoService.getAll().then((result) => {
            setPhotos(result);
        });
    }, []);

    async function onLoginSubmit(data) {
        try {
            const result = await authService.login(data);
            setAuth(result);
            navigate("/catalog");
        } catch (error) {
            console.log(error.message);
        }
    }

    const contextData = {
        onLoginSubmit,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated :  !!auth.accessToken 
        ,
    }

    return (
        <AuthContext.Provider value={contextData}>
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
