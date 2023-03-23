import { ImageCards } from "./ImageCard/ImageCards";

export function Catalog({photos}) {
    return (
        <div className="main-catalog">
       { photos.map(photo => <ImageCards key={photo._id} {...photo}/> )}
        </div>
    );
}
