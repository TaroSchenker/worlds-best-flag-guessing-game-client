import React, { useState, useContext } from "react";
import { Image, Row, Button, ButtonGroup, Col } from "react-bootstrap";
import { TimerContext } from "../../context/TimerContext";

const Question = ({ userQuestions, setRound, setGuess, setScore }) => {
  const [disabled1, setDisabled1] = useState(false);
  const [disabled2, setDisabled2] = useState(false);
  const [disabled3, setDisabled3] = useState(false);
  const [disabled4, setDisabled4] = useState(false);
  const [buttonOneActive, setButtonOneActive] = useState(false);
  const [buttonTwoActive, setButtonTwoActive] = useState(false);
  const [buttonThreeActive, setButtonThreeActive] = useState(false);
  const [buttonFourActive, setButtonFourActive] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const [button1Variant, setButton1Variant] = useState("outline-primary");
  const [button2Variant, setButton2Variant] = useState("outline-primary");
  const [button3Variant, setButton3Variant] = useState("outline-primary");
  const [button4Variant, setButton4Variant] = useState("outline-primary");

  const [
    time,
    setTime,
  ] = useContext(TimerContext);
  // TODO: pushed button can be spammed, need a fix!

  const guess = (guess) => {
    setShowAnswer(true);
    if (guess === 0) {
      setButtonOneActive(true);
      // setDisabled1(true);
      setDisabled2(true);
      setDisabled3(true);
      setDisabled4(true);
      if (guess === userQuestions[4]) {
        setButton1Variant("outline-success");
      } else {
        setButton1Variant("outline-warning");
      }
    } else if (guess === 1) {
      setButtonTwoActive(true);
      setDisabled1(true);
      // setDisabled2(true);
      setDisabled3(true);
      setDisabled4(true);
      if (guess === userQuestions[4]) {
        setButton2Variant("outline-success");
      } else {
        setButton2Variant("outline-warning");
      }
    } else if (guess === 2) {
      setButtonThreeActive(true);
      setDisabled1(true);
      setDisabled2(true);
      // setDisabled3(true);
      setDisabled4(true);
      if (guess === userQuestions[4]) {
        setButton3Variant("outline-success");
      } else {
        setButton3Variant("outline-warning");
      }
    } else if (guess === 3) {
      setButtonFourActive(true);
      setDisabled1(true);
      setDisabled2(true);
      setDisabled3(true);
      // setDisabled4(true);
      if (guess === userQuestions[4]) {
        setButton4Variant("outline-success");
      } else {
        setButton4Variant("outline-warning");
      }
    } else {
      console.log("invalid guess: " + guess);
    }

    if (guess === userQuestions[4]) {
      console.log("correct answer");
      setScore((curr) => (curr + (time * 10)));
    } else {
      console.log("wrong answer");
    }
    setTimeout(() => {
      setRound((curr) => (curr += 1));
      setGuess(guess);
      readyNextTurn();
      setShowAnswer(false);
    }, 1000);
  };
  const readyNextTurn = () => {
    setDisabled1(false);
    setDisabled2(false);
    setDisabled3(false);
    setDisabled4(false);
    setButtonOneActive(false);
    setButtonTwoActive(false);
    setButtonThreeActive(false);
    setButtonFourActive(false);
    setButton1Variant("outline-primary");
    setButton2Variant("outline-primary");
    setButton3Variant("outline-primary");
    setButton4Variant("outline-primary");
  };
  return (
    <div>
      <Row className="">
        <ButtonGroup size="md">
          <Button
            // className="rounded button m-1 p-1 shadow-sm text-dark stopClick"
            className={`rounded button m-1 p-1 shadow-sm text-dark ${showAnswer ? "stopClick" : ""}`}
            active={buttonOneActive}
            variant={button1Variant}
            onClick={() => guess(0)}
            disabled={disabled1}
          >
            {userQuestions[0].name}
          </Button>
          <Button
                   className={`rounded button m-1 p-1 shadow-sm text-dark ${showAnswer ? "stopClick" : ""}`}
            active={buttonTwoActive}
            variant={button2Variant}
            onClick={() => guess(1)}
            disabled={disabled2}
          >
            {userQuestions[1].name}
          </Button>
          <Button
                   className={`rounded button m-1 p-1 shadow-sm text-dark ${showAnswer ? "stopClick" : ""}`}
            active={buttonThreeActive}
            variant={button3Variant}
            onClick={() => guess(2)}
            disabled={disabled3}
          >
            {userQuestions[2].name}
          </Button>
          <Button
                   className={`rounded button m-1 p-1 shadow-sm text-dark ${showAnswer ? "stopClick" : ""}`}
            active={buttonFourActive}
            variant={button4Variant}
            onClick={() => guess(3)}
            disabled={disabled4}
          >
            {userQuestions[3].name}
          </Button>
        </ButtonGroup>
      </Row>
      <Row className="mt-4 d-flex justify-content-center ">
        <div
          className="p-3 bg-transparent shadow-sm"
          style={{
            height: "auto",
            maxHeight: "400px",
            width: "auto",
            maxWidth: "400px",
          }}
        >

            <p className="text-center"><span> Who's flag is this?</span> </p>
          <Image fluid={true} src={userQuestions[userQuestions[4]].flagUrl} />
          {/* 
          {showAnswer && (
            <p className="mt-2 text-center">
              Correct answer: {userQuestions[userQuestions[4]].name}
            </p>
          )} */}
        </div>
      </Row>
    </div>
  );
};

export default Question;
