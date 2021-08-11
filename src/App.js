import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "react-bootstrap";

// import "./App.css";
// import {Course} from "./component/Course";
import { Emicalc } from "./component/Emicalc";
// import { PianoParent } from "./component/PianoParent";
// import { AudioPlayer } from "./component/AudioPlayer";
// import { CardParent } from "./component/cards/CardParent";
// import { EmployeeList } from "./component/employee/EmployeeList";
// import {Clock} from "./component/Clock";
function App() {
  const [specDesc, setSpecDesc]=useState(0);
  return (
    <div className="App">
       <Form.Control
              type="number"
              placeholder="special discount"
              onChange={(e) => setSpecDesc(e.target.value)}
            />
      {/* <CardParent/> */}
      {/* <EmployeeList /> */}
      {/* <Clock /> */}
      {/* <PianoParent /> */}
      {/* <AudioPlayer /> */}
      <Emicalc specDesc={specDesc}/>
      {/* <Course/> */}

      {/* /* <h1><span style={{color: "blue" , backgroundColor:"lightblue", padding:"20px"}}>list of institute</span></h1>
    <table>
        <tr>
        <td><Course courseName="Pdac" instituteName="Pickupbiz" contact="9623351105" city="Nanded"/></td>
        <td><Course courseName="Networking" instituteName="SeedInfo" contact="9421757143" city="Pune"/></td>
        <td><Course courseName="cdac" instituteName="C-DAC" contact="8087560784" city="Mumbai"/></td>
        <td><Course courseName="React" instituteName="UK Academy" contact="9359306022" city="Delhi"/></td>
        </tr>
    </table>

    
    <tr>
    <td><hr /></td>
    <td><hr /></td>
    <td><hr /></td>
    <td><hr /></td>
      </tr>
      
        <tr>
        <td><Course courseName="Pdac" instituteName="Pickupbiz" contact="9623351105" city="Nanded"/></td>
        <td><Course courseName="Networking" instituteName="SeedInfo" contact="9421757143" city="Pune"/></td>
        <td><Course courseName="cdac" instituteName="C-DAC" contact="8087560784" city="Mumbai"/></td>
        <td><Course courseName="React" instituteName="UK Academy" contact="9359306022" city="Delhi"/></td>
    </tr>
    <tr>
    <td><hr /></td>
    <td><hr /></td>
    <td><hr /></td>
    <td><hr /></td>
      </tr>    
        <tr>
        <td><Course courseName="Pdac" instituteName="Pickupbiz" contact="9623351105" city="Nanded"/></td>
        <td><Course courseName="Networking" instituteName="SeedInfo" contact="9421757143" city="Pune"/></td>
        <td><Course courseName="cdac" instituteName="C-DAC" contact="8087560784" city="Mumbai"/></td>
        <td><Course courseName="React" instituteName="UK Academy" contact="9359306022" city="Delhi"/></td>
    </tr>
    <tr>
    <td><hr /></td>
    <td><hr /></td>
    <td><hr /></td>
    <td><hr /></td>
      </tr>    
      </table>  */}
    </div>
  );
}

export default App;
