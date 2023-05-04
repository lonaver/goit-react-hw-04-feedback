import React, { useEffect, useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setCountTotalFeedback] = useState(0);
  const [positivePercentage, setCountPositiveFeedbackPercentage] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleCountFeedback = name => {
    if (name === 'good') {
      setGood(prevState => prevState + 1);
      return;
    }
    if (name === 'neutral') {
      setNeutral(prevState => prevState + 1);
      return;
    }
    if (name === 'bad') {
      setBad(prevState => prevState + 1);
      return;
    }
  };

  useEffect(() => {
    setCountTotalFeedback(good + neutral + bad);
    setCountPositiveFeedbackPercentage(
      Math.round((good / (total === 0 ? 1 : total)) * 100)
    );
    setVisible(good === 0 && neutral === 0 && bad === 0 ? true : false);
  }, [good, neutral, bad, total, positivePercentage, visible]);

  return (
    <>
      <Section title="Please live feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleCountFeedback}
        ></FeedbackOptions>

        <h2>Statistics</h2>
        {visible ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        )}
      </Section>
    </>
  );
}
export default App;
