import React, { useEffect, useState } from "react";
import { Button, Container, Row, Modal, Col } from "react-bootstrap";
import axios from "axios";
import { set2dQuizArray } from "../../helpers";
import { countryDataFile } from "../../data/countryDataFile";
import Question from "../../components/question";
import { Form, InfoDisplay } from "../../components";
import HighScore from "../highscore";

const Home = () => {
  const [countryData, setCountryData] = useState(countryDataFile);
  const [displayName, setDisplayName] = useState("anonymous");
  const [userQuestions, setUserQuestions] = useState([]);
  const [round, setRound] = useState(null);
  const [guess, setGuess] = useState(null);
  const [score, setScore] = useState(null);
  const [highScores, setHighScores] = useState(null);
  const [endGame, setEndGame] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setScore(0);
    setShow(false);
  };
  const handleShow = () => setShow(true);
  useEffect(() => {
    const getHighScores = async () => {
      try {
        const res = await axios("http://localhost:4000/api/highscores/");
        console.log(res.data);
        setHighScores(res.data);
      } catch (e) {
        alert(e);
      }
    };
    getHighScores();
    setUserQuestions(set2dQuizArray(countryData));
  }, []);

  const startGame = () => {
    setEndGame(false);
    if (round < 10) {
      setRound((curr) => curr + 1);
    }
  };

  useEffect(() => {
    console.log("new round", round, userQuestions[round - 1]);
    if (round >= 10) {
      console.log("end the game");
      setEndGame(true);
      setRound(null);
    }
  }, [round]);

  const onSubmit = () => {
    const setHighScore = async () => {
      const highScore = {
        displayName: displayName,
        score: score,
      };
      try {
        const res = await axios.post(
          "http://localhost:4000/api/highscores/",
          highScore
        );
        console.log(res);
      } catch (e) {
        alert(e);
      }
    };
    setHighScore();
  };
  useEffect(() => {
    if (score > 0) {
      setShow(true);
    }
  }, [endGame]);
  return (
    <Container>
      <Row>
        <h1 className="main-title"> Flag Guesser</h1>
      </Row>
      {!round && (
        <Row className="d-flex align-content-center justify-content-around text-center">
          <Col xs={5} className="shadow-sm rounded my-auto p-3 border border-dark">
            <InfoDisplay startGame={startGame} round={round} />
          </Col>
          <Col xs={5} className="shadow-sm rounded my-auto p-3 border border-dark">
            {highScores && <HighScore highScores={highScores} />}
          </Col>
        </Row>
      )}
      <Row>
        {round && (
          <Question
            setScore={setScore}
            setGuess={setGuess}
            setRound={setRound}
            userQuestions={userQuestions[round - 1]}
          />
        )}
        {endGame && <div> end game bit</div>}
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You Scored: {score}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Submit your score</Modal.Body>
        <Form setDisplayName={setDisplayName} onSubmit={onSubmit} />
        <Modal.Footer>
          <Button
            className="button"
            variant="outline-info"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Home;
