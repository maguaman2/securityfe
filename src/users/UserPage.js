import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserList } from './UserList';
import { UserDetail } from './UserDetail'
import { getListUsers } from '../service/UserService'

export function UsersPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getListUsers().then(data => {
      setUsers(data);
    }
    );

  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <Link to='/user/new' >
        Crear
      </Link>
      <UserList>
        {
          users.map(item =>
            <UserDetail
              key={item.id}
              user={item} />
          )
        }
      </UserList>
    </div>
  );
}