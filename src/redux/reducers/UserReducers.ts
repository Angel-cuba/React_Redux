import { GET_USERS, LOADING, POST_BY_USER_ID } from '../../utils/constants';

export const initialState = {
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
    case POST_BY_USER_ID: {
      return {
        ...state,
        postsByUserId: action.payload,
        loading: false,
      };
    }
      
    default:
      return state;
  }
}
