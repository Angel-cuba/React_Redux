import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetUsers } from '../redux/actions/UserActions';

function Users() {

const { users } =useSelector(state => state);
  console.log("🚀 ~ file: Users.js:8 ~ Users ~ users:" , users)
  const dispatch = useDispatch();

   useEffect(() => {
     dispatch(GetUsers());
   }, [dispatch])


const handleClick = () => {
 dispatch(GetUsers()); 
}
  return (
    <div>Users

      <button onClick={handleClick}>click</button>
      {/* {
        users?.map(user => (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))
      } */}
    </div>
  )
}

export default Users