import React, { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const Feedback = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

const Statistics = ({ title}) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

const StatisticsLine = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>
  );
};

const Statistics2 = ({ bad, neutral, good }) => {
  return (
    <table>
      <tbody>
        <StatisticsLine text="Good" value={good} />
        <StatisticsLine text="Neutral" value={neutral} />
        <StatisticsLine text="Bad" value={bad} />
        <tr>
          <td>All</td>
          <td>{good + neutral + bad}</td>
        </tr>
        <tr>
          <td>Average</td>
          <td>{(good - bad) / (good + neutral + bad)}</td>
        </tr>
        <tr>
          <td>Positive</td>
          <td>{(good / (good + neutral + bad)) * 100}%</td>
        </tr>
      </tbody>
    </table>
  );
};
const Unicafe = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = (newGood) => {
    console.log("value now ", good);
    setGood(newGood);
  };
  const setToNeutral = (newNeutral) => {
    console.log("value now ", neutral);
    setNeutral(newNeutral);
  };
  const setToBad = (newBad) => {
    console.log("value now ", bad);
    setBad(newBad);
  };

  return (
    <div>
      <Feedback title={"give feedback"} />
      <Button handleClick={() => setToGood(good + 1)} text={"Good"} />
      <Button handleClick={() => setToNeutral(neutral + 1)} text={"Neutral"} />
      <Button handleClick={() => setToBad(bad + 1)} text={"Bad"} />

      {/* <button onClick={() => setToGood
        (good + 1)}>good</button> */}
      <Statistics title={"Statistics"} />
      {good || neutral || bad ? (
        <Statistics2 good={good} bad={bad} neutral={neutral} />
      ) : (
        "No feedback given"
      )}
    </div>
  );
};

export default Unicafe;
