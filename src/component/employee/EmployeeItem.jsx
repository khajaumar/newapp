import React from "react";
import { Card } from "react-bootstrap";
export const EmployeeItem = ({ elem }) => {
  return (
    <Card className="employeeItem">
      <h4>Employee Item</h4>
      <span>
        <img src={elem.image} alt="" />{" "}
      </span>
      <span>Name: {elem.name}</span>
      <span>City:{elem.Dept} </span>
      <span>City: {elem.Eid}</span>
      <span>City: {elem.Contact}</span>
    </Card>
  );
};
