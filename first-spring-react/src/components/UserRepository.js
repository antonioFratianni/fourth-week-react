import axios from "axios";
import React, { useState } from "react"

 export const UserRepository = ({ user }) => {
    const[users, setUsers] = useState([]);

    const[id, setId] = useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:8080/api/v1/findall');
            setUsers(response.data);
        }
        fetchData();
    }, []);

    const handleClick = (e) => {
        const fetchData = async () => {
            const response = await axios.delete(`http://localhost:8080/api/v1/${id}`);
            setUsers(response.data);
        }
        fetchData();
    }
    

    return (
        <div>
        {users.length > 0 && users.map(user =>
            <table>
                <tr key={user.id}>{user.id}</tr>
                <tr key={user.name}>{user.name}</tr>
                <tr key={user.lastname}>{user.lastname}</tr>
                <tr key={user.age}>{user.age}</tr>
            </table>
        )}
        <label for="id"> ID: </label><br/>
<input type="text" id="id" name="id" value={id} placeholder=" ID" />
        <button onClick={handleClick}>delete</button>
    </div>
    
    )

}




