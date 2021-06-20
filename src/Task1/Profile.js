import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.scss';
import logo from '../logo.svg';

const Profile = ({ name, tag, location, avatar, stats: { followers, views, likes} }) => (
    <div className={styles.profile}>
    <div className={styles.description}>
        <img
        src={avatar}
        alt="Аватар пользователя"
        className={styles.avatar}
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{'@' + tag}</p>
        <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
        <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{followers}</span>
        </li>
        <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{views}</span>
        </li>
        <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{likes}</span>
        </li>
    </ul>
    </div>
);

Profile.defaultProps = {
    tag: 'some-tag',
    avatar: logo,
    stats: {
        followers: 0,
        views: 0,
        likes: 0
    }
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number)
}

export default Profile;
