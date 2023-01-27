import {useEffect} from "react";
import {useSelector} from "react-redux";
import {getUsers} from "../store";
import {postUser} from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import {useThunk} from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";

function UsersList() {
    const [doGetUsers, isLoadingUsers, loadingUsersError] = useThunk(getUsers);
    const [doPostUser, isCreatingUser, creatingUserError] = useThunk(postUser);

    const {data} = useSelector((state) => {
        return state.users;
    })

    useEffect(() => {
        doGetUsers();
    }, [doGetUsers]);

    const handleUserAdd = () => {
        doPostUser();
    }

    let content;

    if (isLoadingUsers) {
        content = <Skeleton instances={6} className="h-10 w-full"/>
    } else if (loadingUsersError) {
        content = <div>Error fetching data...</div>
    } else {
        content = data.map((user) => {
            return <UsersListItem key={user.id} user={user} />
        });
    }

    return (
        <div>
            <div className="flex flex-row justify-between items-center m-3">
                <h1 className="m-2 text-xl">Users</h1>
                <Button loading={isCreatingUser} onClick={handleUserAdd}>+ Add User</Button>
                {creatingUserError && 'Error creating user...'}
            </div>
            {content}
        </div>
    );
}

export default UsersList;