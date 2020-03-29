import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsersAction } from "../store/actions/users-actions";

const HomePage = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  const renderUsers = () => {
    return (
      <>{users && users.map(user => <li key={user.id}>{user.name}</li>)}</>
    );
  };

  return (
    <div>
      HOME PAGE <Link to="/secondpage">GO TO SECOND PAGE</Link>
      <div>
        <h2>USERS</h2>
        <ul>{renderUsers()}</ul>
      </div>
    </div>
  );
};

export const homePageLoadData = store => {
  return store.dispatch(getUsersAction());
};

export default HomePage;
