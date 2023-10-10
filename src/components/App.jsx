import React from "react";
import Profile from './profile/profile'
import FriendList from './friendlist/friendlist'
import Statistics from './statistics/statistics'
import TransactionHistory from './transaction-history/transaction-history'
import user from './profile/user.json'
import './App.css'

export const App = () => {
  return (
    <div>
      <Profile 
      username = {user.username}
      tag = {user.tag}
      location = {user.location}
      stats = {user.stats}
      avatar={user.avatar}
      />
      <FriendList/>
      <Statistics/>
      <TransactionHistory/>
    </div>
  );
};
