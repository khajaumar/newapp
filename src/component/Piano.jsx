import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../component/Piano.css";
export const Piano = () => {
  const handlePiano = (bit) => {
    const audio = new Audio(`mp3/${bit}.mp3`);
    audio.play();
  };
  document.addEventListener("keydown", (e) => {
    if (e.key === "a" && handlePiano("A"));
    if (e.key === "s" && handlePiano("B"));
    if (e.key === "d" && handlePiano("C"));
    if (e.key === "f" && handlePiano("D"));
    if (e.key === "j" && handlePiano("E"));
    if (e.key === "k" && handlePiano("F"));
    if (e.key === "l" && handlePiano("G"));
    if (e.key === "A" && handlePiano("Ab"));
    if (e.key === "S" && handlePiano("Bb"));
    if (e.key === "D" && handlePiano("C"));
    if (e.key === "F" && handlePiano("Db"));
    if (e.key === "J" && handlePiano("Eb"));
    if (e.key === "K" && handlePiano("A"));
    if (e.key === "L" && handlePiano("Gb"));
    e.stopPropagation();
  });
  return (
    <div>
      <Row>
        <Col>
          <Button
            variant="light"
            id="aamer"
            onMouseDown={() => handlePiano("A")}
          >
            sa
          </Button>
          <Button
            variant="light"
            id="aamer"
            onMouseDown={() => handlePiano("B")}
          >
            re
          </Button>
          <Button
            variant="light"
            id="aamer"
            onMouseDown={() => handlePiano("C")}
          >
            ga
          </Button>
          <Button
            variant="light"
            id="aamer"
            onMouseDown={() => handlePiano("D")}
          >
            ma
          </Button>
          <Button
            variant="light"
            id="aamer"
            onMouseDown={() => handlePiano("E")}
          >
            pa
          </Button>
          <Button
            variant="light"
            id="aamer"
            onMouseDown={() => handlePiano("F")}
          >
            dha
          </Button>
          <Button
            variant="light"
            id="aamer"
            onMouseDown={() => handlePiano("G")}
          >
            ni
          </Button>
        </Col>
      </Row>
    </div>
  );
};


