import React from 'react';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import css from './App.module.css'

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
    this.setState({
      [evt.target.id]: this.state[evt.target.id] + 1,
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  };

  render() {
    return (
      <div className={css.Conteiner}>
        <FeedbackOptions hendleClick={this.onLeaveFeedback} />
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <span className={css.Text}>"There is no feedback"</span>
        )}
      </div>
    );
  }
}
