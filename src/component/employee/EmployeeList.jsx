import React, { useState, useEffect } from "react";
import { Card, Col, Row, Form } from "react-bootstrap";
import "../employee/EmployeeList.css";
import { EmployeeItem } from "./EmployeeItem";
import { CardRed } from "../../reducers/CardRed";
export const EmployeeList = () => {
  const [emparr, setEmparr] = useState(CardRed.Data);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const filterArr = Data.filter((elem) =>
      elem.name.tolowerCase().includes(search.toLowerCase())
    );
  }, [search]);
  return (
    <Card className="employeeList">
      <h2>Employee List</h2>
      <Form.Control
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      ></Form.Control>
      <Row>
        {emparr.map((item) => (
          <Col md={4}>
            <EmployeeItem elem={item} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};
