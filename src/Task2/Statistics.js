import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';

const Statistics = ({title, stats}) => (
    <section className={styles.statistics}>
    { title && (<h2 className={styles.title}>Upload stats</h2>)}
    <ul className={styles.list}>
       {stats.map((item) => (
            <li className={styles.item} key={item.id}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
            </li>
       ))}
    </ul>
    </section>
);

Statistics.defaultProps = {
    stats: PropTypes.arrayOf(PropTypes.object)
};

export default Statistics;