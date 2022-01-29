import Button from "../UI/Button";
import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";
import ErrorModal from "../UI/ErrorModal";

function UserList(props) {
    const [showModal, setShowModal] = useState(null);
    const [filteredUsers, setFilteredUsers] = useState();

    const onDeleteHandler = (e) => {
        setFilteredUsers(props.users.filter((user) => user.id !== e.target.id));
        setShowModal({ title: "Warninig", message: "Are you sure?" });
    };

    const deleteDataHandler = () => {
        props.onGetFilteredData(filteredUsers);
        setShowModal(null);
    };

    const cancelDelete = () => {
        setShowModal(null);
    };

    let show = <p>No Users</p>;

    if (props.users.length > 0) {
        show = props.users.map((user) => (
            <li key={user.id}>
                {user.name} ({user.age} years old)
                <Button id={user.id} onClick={onDeleteHandler}>
                    Delete
                </Button>
            </li>
        ));
    }
    return (
        <Card className={classes.users}>
            {showModal && (
                <ErrorModal
                    title={showModal.title}
                    message={showModal.message}
                    onConfirm={deleteDataHandler}
                >
                    <Button
                        onClick={cancelDelete}
                        className={classes.marginBtn}
                    >
                        Cancel
                    </Button>
                </ErrorModal>
            )}
            <ul>{show}</ul>
        </Card>
    );
}

export default UserList;
