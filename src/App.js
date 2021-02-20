import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserItem from "./components/user_item.js";
import Pagination from "./components/pagination";
import Search from "./components/search";

import { users } from "./store/actions/users";
import { sortbyname } from "./store/actions/sortbyname";
import { sortbysurname } from "./store/actions/sortbysurname";

function App() {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users);

  useEffect(() => dispatch(users(1)), []);

  return (
    <React.Fragment>
      <Search />

      {usersList.length ? <table>
        <thead>
          <tr>
            <th onClick={()=>dispatch(sortbyname())}>Users Names</th>
            <th onClick={()=>dispatch(sortbysurname())}>Users Websites</th>
          </tr>
        </thead>
        <tbody>
          {
            usersList.map(user => {
              return <UserItem key={user.userID} {...user} />
            })
          }
        </tbody>
      </table> : "list empty"}

      <Pagination />
    </React.Fragment>
  );
}

export default App;