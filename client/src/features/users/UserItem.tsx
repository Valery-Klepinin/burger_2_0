import React from 'react';
import { User } from './types/types';
import { removeUser } from './usersSlice';
import { useAppDispatch } from '../../redux/store';

function UserItem({ user }: { user: User }): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div className="users__item">
      <h5>{user.name}</h5>
      <button type="button" onClick={() => dispatch(removeUser(user.id))}>
        Delete
      </button>
    </div>
  );
}

export default UserItem;
