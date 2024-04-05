import { useState, useEffect } from 'react';
import Homework26 from '../lesson26/Homework26.jsx';
import AddNewUser from './AddNewUser.jsx';
import { getUserWithPaginate } from '../../utils/apiService.js';

const Lesson27 = (props) => {
    const [listUsers, setListUsers] = useState([]);

    const [newUser, setNewUser] = useState("");

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const res = await getUserWithPaginate(1, 3);
        if (res && res.EC === 0) {
            setListUsers(res.DT.users);
        }
    }

    const addNew = (user) => {
        setListUsers([user, ...listUsers]);
    }
    return (
        <div>
            <AddNewUser addNew={addNew} />
            <Homework26
                listUsers={listUsers}
            />
        </div>
    )
}

export default Lesson27;