import css from './profile.module.css'
const Profile = ({ username, tag, location, stats, avatar }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <div className={css.avatar}>
        <img src={avatar} alt="User avatar"/>
        </div>
        <p className={css.username}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <div className={css.stats}>
        <div className={css.stats_item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </div>
        <div className={css.stats_item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </div>
        <div className={css.stats_item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
