import { ImageCards } from "./ImageCard/ImageCards";

import "./catalog.module.css"

export function Catalog({photos}) {
    return (
        <div className="main-catalog">
       { photos.map(photo => <ImageCards key={photo._id} {...photo}/> )}
        </div>
    );
}
