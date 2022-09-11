import React from "react";
import { ListGroup } from "react-bootstrap";

const HighScore = ({ highScores }) => {
  return (
    <>
      <h1> High Scores</h1>
      <ListGroup as="ol" numbered>
        {highScores.map((score, i) => (
          i < 10 &&
          <ListGroup.Item key={i} as="li">
            {score.displayName}: {score.score}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default HighScore;
