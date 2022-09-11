import React from "react";
import { Button } from "react-bootstrap";
const InfoDisplay = ({ startGame, round }) => {
  return (
    <>
      <span> Welcome! </span>
      <p>Your purpose is simple, Get the No.1 high score!</p>
      <p>There are 10 rounds. In each round you will be shown a flag.</p>
      <p> Guess who's flag it is</p>
      <p>
        Enter your name at the end to be included in the all-time high scores
      </p>
      {round < 1 && (
        <Button className="button" variant="info" onClick={startGame}>
          Start Game
        </Button>
      )}
    </>
  );
};

export default InfoDisplay;
