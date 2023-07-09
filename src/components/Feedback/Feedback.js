import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css'

export const FeedbackOptions = ({hendleClick}) => {
    return (
      <div className={css.Feedback}>
        <span className={css.Text}>Please leave feedback</span>

        <div className={css.Buttons}>
          <button onClick={hendleClick} id='good'>Good</button>
          <button onClick={hendleClick} id='neutral'>Neutral</button>
          <button onClick={hendleClick} id='bad'>Bad</button>
        </div>
      </div>
    );
}

FeedbackOptions.propTypes = {
    hendleClick: PropTypes.func.isRequired
}

