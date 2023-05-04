import React from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.wrap_stat}>
      <p>
        Good <span className={styles.textStat}>{good}</span>{' '}
      </p>
      <p>
        Neutrals <span className={styles.textStat}>{neutral}</span>
      </p>
      <p>
        Bad <span className={styles.textStat}>{bad}</span>
      </p>
      <p>
        Total <span className={styles.textStat}>{total}</span>
      </p>
      <p>
        Positive feedback{' '}
        <span className={styles.textStat}>{positivePercentage} %</span>
      </p>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
