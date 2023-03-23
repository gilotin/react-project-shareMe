// import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export function Profile() {
    return (
        <>
            <h1>Place for your profile</h1>
            {/* <Link to={`/profile/create`}>Create</Link> */}
            <Button type="button" href="/profile/create">Create </Button>{' '}
            </>
    );
}
