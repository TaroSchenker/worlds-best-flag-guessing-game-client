import React, { useEffect, useState } from "react";
import { Button, Container, Row, Modal, Col } from "react-bootstrap";
import axios from "axios";
import { set2dQuizArray } from "../../helpers";
import { countryDataFile } from "../../data/countryDataFile";
import Question from "../../components/question";
import { Form, InfoDisplay, Timer } from "../../components";
import HighScore from "../highscore";
import { MyForm } from "../../components/form";

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
        const res = await axios(
          "https://best-flag-guesser.herokuapp.com/api/highscores/"
        );
        console.log(res.data);
        setHighScores(res.data);
      } catch (e) {
        alert(e);
      }
    };
    getHighScores();
    setUserQuestions(set2dQuizArray(countryData));
  }, []);
  console.log("in the open displayname", displayName);
  const startGame = () => {
    setEndGame(false);
    setScore(0);
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

  const onSubmit = (e) => {
    console.log("i am submittted", displayName);
    const setHighScore = async () => {
      const highScore = {
        displayName: displayName,
        score: score,
      };
      console.log("highscore variable", highScore);
      try {
        const res = await axios.post(
          "https://best-flag-guesser.herokuapp.com/api/highscores",
          highScore
        );
        console.log("server respnse from post req:", res);
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
        {round && (
          <div className="mx-auto text-center">
            {" "}
            <span>Q{round} &nbsp; </span> <span>Points: {score} </span>
          </div>
        )}
      </Row>
      {round && (
        <div className="mx-auto text-center">
          <Timer setGuess={setGuess} setRound={setRound} round={round} />
        </div>
      )}

      {!round && (
        <Row className="d-flex align-content-center justify-content-around text-center">
          <Col
            xs={5}
            className="shadow-sm rounded my-auto p-3 border border-muted bg-transparent text-white"
          >
            <InfoDisplay startGame={startGame} round={round} />
          </Col>
          <Col
            xs={5}
            className="shadow-sm rounded my-auto p-3 border border-muted bg-transparent text-white "
          >
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
      </Row>
      <Modal className="my-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="mx-auto text-light"></div>
          <Modal.Title className="text-light main-title mx-auto">
            You Scored: {score}
          </Modal.Title>
        </Modal.Header>
        <div className="mx-auto">
          {/* <Modal.Body className="mx-auto text-light">Submit your score</Modal.Body>  */}
        </div>

        <MyForm setDisplayName={setDisplayName} onSubmit={onSubmit} />
        <Modal.Footer>
          <Button
            className="button text-muted"
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
