import { Dispatch } from 'redux';
import { allUsers } from '../../api/request';
import { GET_USERS, User } from '../../utils/constants';

export const GetUsers = (users: User) =>  {
return {
type: GET_USERS,
payload: users
}
};

export const fetchUsers = () => {
return async (dispatch: Dispatch) => {
try {
const users = await allUsers();
dispatch(GetUsers(users));
} catch (error) {
console.log(error);
}
};
};