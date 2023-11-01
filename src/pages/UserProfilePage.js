import Header from "../Header";
import Profile from "../user/profile";

function UserProfilePage() {
    return (
        <div>
            <Header>
                <h1>My Profile</h1>
                <Profile></Profile>
            </Header>
        </div>
    );
}

export default UserProfilePage;