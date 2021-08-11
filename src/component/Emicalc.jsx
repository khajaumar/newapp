import React, { useState, useMemo  } from "react";
import { Form, Button, Card, Row } from "react-bootstrap";
import "../component/Emicalc.css";
// import { EmicalcRed } from "../reducers/EmicalcRed";
export const Emicalc = ({specDesc}) => {
  const [p, setP] = useState(0);
  const [n, setN] = useState(0);
  const [r, setR] = useState(0);
  // const [emi, setEmi] = useState(0);
  const handleCalEmi = () => {
    const si = (p * n * r) / 100;
    const repayAmount = Number(p) + Number(si);
    const emiLocal = repayAmount / (n * 12);
    return emiLocal-(emiLocal*(specDesc/100));
  };
  const emi=useMemo(()=>handleCalEmi(),[p,n,r,specDesc])
  // useEffect(()=>{
  //   handleCalEmi();
  // },[p, n, r])

  return (
    <div>
      {/* <EmicalcRed /> */}
      <Card id="cal">
        <Card.Body>
          <h1>
            EMI Calculator<sup>CASIO</sup>
          </h1>
          <hr />
          <Row>
            <h1 id="disp">{emi}</h1>
          </Row>
          <hr />
          <Row>
            <Form.Control
              type="number"
              placeholder="principle"
              onChange={(e) => setP(e.target.value)}
            />
            <Form.Control
              type="number"
              placeholder="No. of year"
              onChange={(e) => setN(e.target.value)}
            />
            <Form.Control
              type="number"
              placeholder="Rate of Intrest"
              onChange={(e) => setR(e.target.value)}
            />
            <Button variant="danger" onClick={handleCalEmi}>
              EMI
            </Button>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
