import React from "react";
import { Card } from "react-bootstrap";
import './Cards.css';

export const CardChild = ({elem}) => {
  return (
      <Card className="employeeCard" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={elem.image} />
        <Card.Body>
          <Card.Title>Employee ID:{elem.Eid}</Card.Title>
          <Card.Text>
           {`Name:${elem.name}` } <br />
           {`Department:${elem.Dept}`}  <br />
            { `Mobile No.:${elem.Contact}`} <br />
          </Card.Text>
        </Card.Body>
      </Card>
  );
};
