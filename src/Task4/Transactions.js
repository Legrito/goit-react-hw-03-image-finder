import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transactions.module.scss';

const TransactionHistory = ({items}) => (
    <table className={styles.transaction__history}>
    <thead>
        <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
        </tr>
    </thead>
    <tbody>
        {items.map((item) => (
            <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
            </tr>
        ))}
    </tbody>
    </table>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
}

export default TransactionHistory;