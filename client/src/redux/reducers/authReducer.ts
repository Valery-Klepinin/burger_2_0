import { Action } from '../../features/auth/types/Action';
import { State } from '../../features/auth/types/State';

const initialState: State = {
  authUser: undefined,
  error: undefined,
};

const authReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'auth/check':
      return {
        ...state,
        authUser: action.payload,
      };
    case 'auth/sign-up':
      return {
        ...state,
        authUser: action.payload,
      };
    case 'auth/logout':
      return {
        ...state,
        authUser: undefined,
      };
    default:
      return state;
  }
};

export default authReducer;
