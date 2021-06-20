import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendsList.module.scss';

const FriendsList = ({ friends }) => (
   <ul className={styles.friend__list}>
      {friends.map((friend) => (
          <li className={styles.item} key={friend.id}>
          <span className={ friend.isOnline ? styles.isOnline : styles.isOffline}></span>
          <img className={styles.avatar} src={friend.avatar} alt={friend.name} width="48" />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
   </ul>
);

FriendsList.propTypes = {
   friends: PropTypes.arrayOf(PropTypes.object)
}

export default FriendsList;