import { allUsers } from '../../api/request';
import { GET_USERS } from '../../utils/constants';

export const GetUsers = () => {

  const response = allUsers()
  return {
    type: GET_USERS,
    payload: response
  }
};
