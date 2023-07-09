import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p className={css.StatisticName}>
        Good: <span>{good}</span>
      </p>
      <p className={css.StatisticName}>
        Neutral: <span>{neutral}</span>
      </p>
      <p className={css.StatisticName}>
        Bad: <span>{bad}</span>
      </p>
      <p className={css.StatisticName}>
        Total: <span>{total}</span>
      </p>
      <p className={css.StatisticName}>
        Positive feedback: <span>{positivePercentage}</span>%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
