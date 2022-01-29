import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
    const [users, setUsers] = useState([]);

    const addUserHandler = (name, age) => {
        setUsers([...users, { name, age, id: Math.random().toString() }]);
    };

    const getFilteredData = (filteredData) => {
        setUsers(filteredData);
    };
    return (
        <div className="App">
            <AddUser onAddUser={addUserHandler} />
            <UserList users={users} onGetFilteredData={getFilteredData} />
        </div>
    );
}

export default App;
