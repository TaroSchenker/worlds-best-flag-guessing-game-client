import React from "react";
import { ListGroup } from "react-bootstrap";
import Title from "../../components/title";

const HighScore = ({ highScores }) => {
  return (
    <>
    <Title text='High Scores'/>
      {/* <h1> High Scores</h1> */}
      
      <ListGroup as="ol" numbered>
        {highScores.map((score, i) => (
          i < 10 &&
          <ListGroup.Item key={i} as="li" className="bg-transparent text-dark">
            {score.displayName}: {score.score}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default HighScore;
