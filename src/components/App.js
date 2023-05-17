import { useState } from "react";
import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './feedback/FeedbackOptions';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const keyState = ['good', 'neutral', 'bad'];
  
  const updateState = (propertyState) => {
    switch (propertyState) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
    }
  };

  const countTotalFeedback = (good, neutral, bad) => good + neutral + bad;
  const countPositiveFeedbackPercentage = (good, total) => Math.round(good / total * 100);

  let total = countTotalFeedback(good, neutral, bad);
  let positivePercentage = countPositiveFeedbackPercentage(good, total);

  return ( 
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={keyState}  updateState={updateState} /> 
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
  )
}

