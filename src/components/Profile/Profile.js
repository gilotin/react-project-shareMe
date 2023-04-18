import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./Profile.module.css";

export function Profile() {
    const user = useContext(AuthContext);

    return (
        <>
            <div id={styles["profile-title"]}>
                {user.userName ? (
                    <h1>Hello {user.userName?.toUpperCase()}, nice to see you!</h1>
                ) : (
                    <h1>Hello {user.email?.toUpperCase()}, nice to see you!</h1>
                )}
            </div>

            <Card id={styles["profile-pic"]}>
                <img
                    src="https://riverlegacy.org/wp-content/uploads/2021/07/blank-profile-photo.jpeg"
                    alt="Profile pic"
                />
            </Card>

            <div id={styles["profile-btn"]}>
                <Link to={"/profile/myCollection"}>
                    <Button type="button" variant="success">
                        My Collection{" "}
                    </Button>{" "}
                </Link>
                <Link to={"/profile/createImage"}>
                    <Button type="button">Create </Button>{" "}
                </Link>
                <Link to={"/profile/deleteProfile"}>
                    <Button type="button" variant="danger">
                        Delete Profile{" "}
                    </Button>{" "}
                </Link>
                <Link to={"/profile/editProfile"}>
                    <Button type="button" variant="warning">
                        Edit Profile
                    </Button>{" "}
                </Link>
                <Link to={"/profile/logout"}>
                    {" "}
                    <Button type="button" variant="warning">
                        Logout
                    </Button>{" "}
                </Link>
            </div>
        </>
    );
}
