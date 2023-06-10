import css from "./FriendList.module.css";
import PropTypes from "prop-types";
import { FriendListItem } from "components/FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends &&
        friends.map((friend) => {
          return (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
              name={friend.name}
            />
          );
        })}
    </ul>
  );
};

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
