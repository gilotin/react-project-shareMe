// import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

export function Profile() {
    return (
        <>
            <h1>Place for your profile</h1>
            {/* <Link to={`/profile/create`}>Create</Link> */}
            <Card>
                <img src="" alt="Profile Pic" />
            </Card>
            <h3>Hello Username!!!</h3>
            <h4></h4>
            <Button type="button" href="/profile/create">
                Create{" "}
            </Button>{" "}
            <Button type="button" href="/profile/deleteProfile">
                Delete Profile{" "}
            </Button>{" "}
            <Button type="button" href="/profile/myCollection">
                My Collection{" "}
            </Button>{" "}
            <Button type="button" href="/profile/editProfile">
                Edit Profile
            </Button>{" "}
        </>
    );
}
