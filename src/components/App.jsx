import React from "react";
import './App.css'
import Profile from './profile/profile'
import FriendList from './friendlist/friendlist'
import Statistics from './statistics/statistics'
import TransactionHistory from './transaction-history/transaction-history'
import user from './data/user.json'
import data from './data/data.json'
import friends from './data/friends.json'

export const App = () => {
  return (
    <div className="main">
      <div className="components">
      <Profile 
      username = {user.username}
      tag = {user.tag}
      location = {user.location}
      stats = {user.stats}
      avatar = {user.avatar}
      /> 
      <Statistics
      title = "UPLOAD STATS"
      stats = {data}
      />
      </div>
      <div className="components">
      <FriendList
      friends = {friends}
      />
      <TransactionHistory/>
      </div>
    </div>
  );
};
