import React, {useState, useEffect} from "react";
import { Navbar, FormControl, Nav, NavDropdown, Form } from "react-bootstrap";

import { CardRed } from "../../Reducers/CardRed";
import { CardChild } from "./CardChild";

export const CardParent = () => {

  const [inputText, setInputText] = useState("");
  const [empDetail, setEmpDetail] = useState(CardRed.Data);
  // useEffect(()=>{
  //   const filtArray = empDetail.filter(
  //   (item)=>
  //   item.name.toLowerCase().includes(setInputText.toLowerCase())
  //   );
  // },[inputText, empDetail])
  
  
  useEffect(() => {
    
    const filtVar  = empDetail.filter(
      (item) =>
      item.name.toLowerCase().includes(inputText.toLowerCase()) ||
      item.Eid.toLowerCase().includes(inputText.toLowerCase()) ||
      item.Dept.toLowerCase().includes(inputText.toLowerCase()) ||
      item.Contact.toLowerCase().includes(inputText.toLowerCase())
    );
    if(inputText=== "") setEmpDetail(CardRed.Data)
    else setEmpDetail(filtVar);
    

  },[inputText]);

  return (
  <div>
      <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#" >Employ Details</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            
            
            <NavDropdown title="Search By" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Department</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Employee ID
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Search
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="searchText"
              placeholder="searchText"
              className="mr-2"
              aria-label="searchText"
              onChange={(e)=>setInputText(e.target.value)}
              />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
       
             
      {CardRed.Data.map((item) => (
            <CardChild elem={item} />
        )
      )}
  </div>
  );
};
