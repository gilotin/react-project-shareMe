import { ImageCards } from "./ImageCard/ImageCards";

import "./catalog.module.css";

export function Catalog({ photos }) {
    return (
        <>
            {photos.length === 0 ? (
                <div>
                    <h1>Catalog is empty</h1>
                </div>
            ) : (
                <div className="main-catalog">
                    {photos.map((photo) => (
                        <ImageCards key={photo._id} {...photo} />
                    ))}
                </div>
            )}
        </>
    );
}
