import css from './friendlist.module.css'
import FriendListItem from './friendlist-item';

const FriendList = ({friends}) => {
    return (
      <ul className={css.friend_list}>
       {friends = friends.map(item => 
            <FriendListItem
              key = {item.id}
              name = {item.name}
              avatar = {item.avatar}
              isOnline={item.isOnline}
            />
        )}
      </ul>
    );
  };
  
  export default FriendList;