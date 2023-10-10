import './profile.css'
const Profile = ({ username, tag, location, stats, avatar }) => {
  return (
    <div className="profile">
      <div className="description">
        <div className='avatar'>
        <img src={avatar} alt="User avatar"/>
        </div>
        <p className="username">{username}</p>
        <p className="tag"><a href='https://www.instagram.com/pasha_khim/' target='_blank' rel='noreferrer' >{tag}</a></p>
        <p className="location">{location}</p>
      </div>

      <div className="stats">
        <div className='stats-item'>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </div>
        <div className='stats-item'>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </div>
        <div className='stats-item'>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
