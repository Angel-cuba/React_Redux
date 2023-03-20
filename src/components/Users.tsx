import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/UserActions';
import { AppDispatch, RootState } from '../redux/store';

function Users() {
 const dispatch = useDispatch<AppDispatch>();
 const {items}= useSelector((state: RootState )=> state);
 console.log("🚀 ~ file: Users.tsx:9 ~ Users ~ items:", items)
 

   useEffect(() => {
     dispatch(fetchUsers());
   }, [dispatch])


  return (
    <div>Users

       {/* <button onClick={() => dispatch(fetchUsers())}>click</button>  */}
     {
        items.users.map((user: any) => {
          return <div key={user.id}>{user.name}
          </div>
        })
     }
    </div>
  )
}

export default Users