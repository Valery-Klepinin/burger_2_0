import React from 'react';
import { useSelector } from 'react-redux';
import UserItem from './UserItem';
import './styles/style.scss';
import { RootState } from '../../redux/store';

function UsersPage(): JSX.Element {
  const users = useSelector((store: RootState) => store.users.users);
  return (
    <>
      <h1>Users page</h1>
      <div className="users__container">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}

export default UsersPage;
