import { GET_USERS, LOADING, POSTS_BY_USER_ID, STOP_LOADING, User } from '../../utils/constants';

type UserState = {
  users: User[];
  postsByUserId: any[];
  loading: boolean;
  error: any;
};

export const initialState: UserState = {
  users: [],
  postsByUserId: [],
  loading: false,
  error: null,
};

export function userReducer(
  state = {
    users: [],
    postsByUserId: [],
    loading: false,
    error: null,
  },
  action: any
) {
  switch (action.type) {
    case LOADING:{
      return {
        ...state,
        loading: true,
      };
    }
    case GET_USERS: {
      try {
        console.log(action.payload);
        return {
          ...state,
          users: action.payload,
        };
      } catch (error) {
        console.log(error);
      }
    }
    case STOP_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
}
