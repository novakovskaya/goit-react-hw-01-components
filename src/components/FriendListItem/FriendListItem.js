import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      {isOnline ? (
        <span className={styles.status} style={{ backgroundColor: "#55AC57" }}>
          {isOnline}
        </span>
      ) : (
        <span className={styles.status} style={{ backgroundColor: "#ED4E55" }}>
          {isOnline}
        </span>
      )}
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
