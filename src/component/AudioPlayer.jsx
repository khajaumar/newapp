import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import "../component/AudioPlayer.css";
export const AudioPlayer = () => {
  const audio = new Audio("mp3/ringtone.mp3");
  const handleAudioPlay = () => {
    audio.play();
  };
  const handleAudioStop = () => {
    audio.pause();
  };
  return (
    <Card className="player">
      <Row>
        <Col></Col>
        <Col>
          <Button onClick={handleAudioPlay}>Play</Button>
        </Col>
        <Col>
          <Button onClick={handleAudioStop}>Pause</Button>
        </Col>
        <Col>
          <Button onMouseDown={handleAudioPlay} onMouseUp={handleAudioStop}>
            Piano
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
