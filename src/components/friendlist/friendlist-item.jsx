import css from './friendlist.module.css'

const FriendListItem = ({avatar,name,isOnline}) => {

    return (
        <li className={css.item}>
           {isOnline ? <span className={css.online}>{isOnline}</span> : <span className={css.ofline}>{isOnline}</span> }   
            <div className={css.avatar}>
            <img src={avatar} alt="User avatar"/>
            </div>
            <p className={css.name}>{name}</p>
          </li>
    );
  };
  
  export default FriendListItem;