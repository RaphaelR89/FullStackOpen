import { useState } from "react";

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const Winner = ({ anecWinner, vote }) => {
  const maxVotes = Math.max(...vote);
  const winnerI = vote.indexOf(maxVotes);
  if (maxVotes === 0) {
    return <div>No votes yet</div>;
  }
  return (
    <div>
      <p>{anecWinner[winnerI]}</p>
      <p>has {maxVotes} votes</p>
    </div>
  );
};
const Anecdote = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0));

  const handleRandomAnec = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };

  const handleVoteClick = () => {
    const newVote = [...vote];
    newVote[selected] += 1;
    setVote(newVote);
    console.log(newVote);
  };

  return (
    <div>
      <h1>Anecdote of the day!</h1>
      {anecdotes[selected]}
      <div>has {vote[selected]} votes</div>
      <div>
        <Button text={"vote"} handleClick={handleVoteClick} />
        <Button text={"next anecdotes"} handleClick={handleRandomAnec} />
      </div>
      <h1>Anecdote with most votes</h1>
      <Winner anecWinner={anecdotes} vote={vote} />
    </div>
  );
};

export default Anecdote;
