import { useEffect, useState } from "react";
import * as photoService from "../../../services/photoService"
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export function MyCollection(){
    const [myPhotos, setMyPhotos] = useState({});

    const user = useContext(AuthContext)
    const id = user.userId
    console.log(id);
    useEffect(() => {
        photoService.getByOwnerId(id).then((result) => {
            setMyPhotos(result);
            console.log(result);
        });
    }, []);


    return (<><div>Hello</div></>);
}