import "../component/Course.css"
// import {Carousel} from "react-bootstrap"
import { CourseRed } from "../reducers/CourseRed"
export const Course =()=>{
  console.log("CourseReducerData=====>",CourseRed);
    return(<div>
      {CourseRed.data.map((item)=>
    <table border="5px">
    <tr>
      <td>course name</td>
      <td>:</td>
      <td><span style={{color: "red"}}>{item.courseName}</span></td>
    </tr>
    <tr>
      <td>institute</td>
      <td>:</td>
      <td>{item.instituteName}</td>
    </tr>
    <tr>
      <td>Contact</td>
      <td>:</td>
      <td>{item.contact}</td>
    </tr>
    <tr>
      <td>city</td>
      <td>:</td>
      <td>{item.city}</td>
    </tr>
  </table>
  )};
  </div>
    )
}
        

        //   <Carousel>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 "
    //       src="img1.jpg" height="500px"
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 "
    //       src="img2.jpg" height="500px"
    //       alt="Second slide"
    //     />
    
    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 "
    //       src="img3.jpg" height="500px"
    //       alt="Third slide"
    //     />
    
    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
