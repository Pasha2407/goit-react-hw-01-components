import React from "react";
import './App.css'
import Profile from './profile/profile'
import FriendList from './friendlist/friendlist'
import Statistics from './statistics/statistics'
import TransactionHistory from './transaction-history/transaction-history'
import user from './data/user.json'
import data from './data/data.json'

const Data = data.map(item => 
  <li className={item.color}>
      <span className="label">{item.label}</span>
      <span className="percentage">{item.percentage}%</span>
    </li>
);

export const App = () => {
  return (
    <div>
      <Profile 
      username = {user.username}
      tag = {user.tag}
      location = {user.location}
      stats = {user.stats}
      avatar = {user.avatar}
      /> 
      <Statistics
      title = "UPLOAD STATS"
      stats = {Data}
      />
      <FriendList/>
      <TransactionHistory/>
    </div>
  );
};
