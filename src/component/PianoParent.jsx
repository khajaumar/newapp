import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Piano } from "./Piano";
export const PianoParent = () => {
  return (
    <div>
      <Card>
        <Row>
          <Col>
            <h1>Low</h1>
            <Piano />
          </Col>
          <Col>
            <h1>Med</h1>
            <Piano />
          </Col>
          <Col>
            <h1>High</h1>
            <Piano />
          </Col>
        </Row>
      </Card>
    </div>
  );
};
