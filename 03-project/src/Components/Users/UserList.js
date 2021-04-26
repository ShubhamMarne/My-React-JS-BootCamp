import React, { useImperativeHandle } from 'react';

const UserList = (props) => {
    return (
        <div>
            <ul>
                {props.Users.map((user) => {
                    console.log(user.name + " "+ user.age);
                    <li>
                        {user.name} {user.age}
                    </li>
                })}
            </ul>
        </div>
    )
};

export default UserList;