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
import { MyCollection } from "./components/Profile/MyCollection/MyCollection";
import { DetailPage } from "./components/DetailsPage/DetailsPage";
import { AuthContext } from "./contexts/AuthContext";
import * as authService from "./services/authService";
import { Logout } from "./components/Logout/Logout";
import { Edit } from "./components/Edit/Edit";
import { AlertMessage } from "./components/AlertMessage/AlertMessage";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
    const navigate = useNavigate();
    const [photos, setPhotos] = useState([]);
    const [auth, setAuth] = useState({});
    const [showAlert, setShowAlert] = useState("");

    useEffect(() => {
        photoService.getAll().then((result) => {
            setPhotos(result);
        });
    }, []);

    async function onCreatePhotoSubmit(data) {
        const { title, author, image, country, city, description } = data;

        try {
            if (
                title === "" ||
                author === "" ||
                image === "" ||
                country === "" ||
                city === "" ||
                description === ""
            ) {
                throw new Error("Fill all the fields");
            }

            const newPhoto = await photoService.create(data);
            setPhotos((photos) => [...photos, newPhoto]);

            navigate("/catalog");
        } catch (error) {
            alertHandler(error.message);
        }
    }

    async function onPhotoEdit(data) {
        try {
            const editedPhoto = await photoService.edit(data, data._id);
            setPhotos((photos) =>
                photos.map((photo) => (photo._id === data._id ? editedPhoto : photo))
            ); /// TO fix this
            navigate(-1);
        } catch (error) {
            alertHandler(error.message);
        }
    }

    async function onLoginSubmit(data) {
        try {
            const result = await authService.login(data);
            const { password, ...user } = result;

            localStorage.setItem("token", user.accessToken);
            setAuth(user);

            navigate("/catalog");
        } catch (error) {
            alertHandler(error.message);
        }
    }

    async function onRegisterSubmit(data) {
        const { repeatPassword, ...registerData } = data;

        const regex = /^[\w\.-]+@[\w\.-]+\.\w+$/;

        try {
            if (
                !registerData.email ||
                !registerData.userName ||
                !registerData.password ||
                !repeatPassword
            ) {
                throw new Error("Fill all the fields");
            }

            if (registerData.password !== repeatPassword) {
                throw new Error("Password mismatch!");
            }

            if (!registerData.email.match(regex)) {
                throw new Error("Enter valid email address");
            }

            if (registerData.password.length < 6) {
                throw new Error("password must be at least 6 characters");
            }

            const result = await authService.register(registerData);
            const { password, ...user } = result;
            localStorage.setItem("token", result.accessToken);
            setAuth(user);
            navigate("/catalog");
        } catch (error) {
            alertHandler(error.message);
        }
    }

    async function onDeleteHandler(id) {
        try {
            await photoService.deletePhoto(id);

            setPhotos((photos) => photos.filter((photo) => photo._id !== id));

            navigate(-1);
        } catch (error) {
            alertHandler(error.message);
        }
    }

    const contextData = {
        onDeleteHandler,
        onLoginSubmit,
        onLogout,
        onRegisterSubmit,
        onCreatePhotoSubmit,
        onPhotoEdit,
        email: auth?.email,
        userName: auth?.userName,
        userId: auth?._id,
        token: auth?.accessToken,
        isAuthenticated: !!auth?.accessToken,
    };

    async function onLogout() {
        try {
            await authService.logout();
            localStorage.clear();
            setAuth({});
        } catch (error) {
            alertHandler(error.message);
        }
    }

    function alertHandler(error) {
        setTimeout(() => {
            setShowAlert("");
        }, 2000);

        return setShowAlert(error);
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
                        {/* <Route path="/search" element={<Search />} /> */}
                        <Route path="/catalog" element={<Catalog photos={photos} />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/profile/CreateImage" element={<CreateImage />} />
                        <Route path="/profile/myCollection" element={<MyCollection />} />
                        <Route path="/myCollection/:photoId" element={<DetailPage />} />
                        <Route path=":photoId/edit" element={<Edit />} />
                        <Route path="/profile/logout" element={<Logout />} />
                        <Route path="catalog/:photoId/" element={<DetailPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                {showAlert ? <AlertMessage alert={showAlert} /> : ""}
            </div>
        </AuthContext.Provider>
    );
}

export default App;
