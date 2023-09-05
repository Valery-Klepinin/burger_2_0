import { Action } from '../../features/users/types/Action';
import { State } from '../../features/users/types/State';

const initialState: State = {
  users: [],
  error: undefined,
};

const usersReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'users/load':
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
