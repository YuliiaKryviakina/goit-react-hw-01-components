import css from "./Profile.module.css";
import PropTypes from "prop-types";

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.profileName}>{username}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.followersList}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.viewsList}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.likesList}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
