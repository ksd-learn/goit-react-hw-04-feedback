import { Component } from "react";
import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './feedback/FeedbackOptions';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  updateState = propertyState => {
    this.setState(prevState => (
      {
      [propertyState]: prevState[propertyState] + 1
      }
    ))
  };

  countTotalFeedback = (good, neutral, bad) => good + neutral + bad;
  countPositiveFeedbackPercentage = (good, total) => Math.round(good / total * 100);
  
  render() {

    const { good, neutral, bad } = this.state;
    let total = this.countTotalFeedback(good, neutral, bad);
    let positivePercentage = this.countPositiveFeedbackPercentage(good, total);
    let keyState = Object.keys(this.state);

      return (
        <>
          <Section title="Please leave feedback">
            <FeedbackOptions options={keyState}  updateState={this.updateState} /> 
          </Section>
          
          <Section title="Statistics" >
            {total > 0 ?
              <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positivePercentage={positivePercentage}
              /> :
              <Notification message="There is no feedback" />
            }
          </Section>
        </>
      );
    }
  }
