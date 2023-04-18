import { useNavigate } from "react-router-dom";

export function NotFound() {
    const homePage = useNavigate();


    return (
        <div>
            <img
                src="https://marketium.club/wp-content/uploads/2021/08/error-404-page-not-found.jpeg"
                alt="404 Not Found"
            />
            <button type="button" onClick={() => homePage('/')}>
                Home page
            </button>
        </div>
    );
}
