import { Button, Card } from "react-bootstrap";
import "./Profile.css";

export function Profile() {
    return (
        <>
            <div id="profile-title">
                <h1>Place for your profile</h1>
            </div>

            <Card id="profile-pic">
                <img
                    src="https://riverlegacy.org/wp-content/uploads/2021/07/blank-profile-photo.jpeg"
                    alt="Profile pic"
                />
            </Card>

            <div id="profile-btn">
                <Button type="button" variant="success" href="/profile/myCollection">
                    My Collection{" "}
                </Button>{" "}
                <Button type="button" href="/profile/createImage">
                    Create{" "}
                </Button>{" "}
                <Button type="button" variant="danger" href="/profile/deleteProfile">
                    Delete Profile{" "}
                </Button>{" "}
                <Button type="button" variant="warning" href="/profile/editProfile">
                    Edit Profile
                </Button>{" "}<Button type="button" variant="warning" href="/profile/logout">
                    Logout
                </Button>{" "}
            </div>
        </>
    );
}
