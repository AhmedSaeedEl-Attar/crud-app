import React ,{Component} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Form from "./components/from/form";
import Lists from "./components/lists/lists";


class Father extends Component {
  state={
    courses : [
      {name : "HTML"} ,
      {name : "JSS"} ,
      {name : "CSS"} 
    ],
    currnt : ''
  }
  // updatechange course
  updatechangecourse = (e)=>{
    let current = this.state.currnt;
    current = e.target.value
    this.setState({currnt : current})
  }
  // add course 
  addcourse =(e)=>{
    e.preventDefault()
    let courses = this.state.courses;
    let current = this.state.currnt;
    courses.push({name : current})
    this.setState({
    courses , 
    currnt : ""
    })
  }
  // remove course
   delcourse = (index)=>{
    let courses = this.state.courses;
    courses.splice(index , 1)
    this.setState({
      courses
    })
   }
   // editupdatecourse
   editupdatecourse = (index , value)=>{
    let courses = this.state.courses;
    let cour = courses[index];
    cour['name'] = value ; 
    this.setState({courses})
   }
  render(){
    let courses = this.state.courses
    let showCourses = courses.map((course , index) => {
       return <Lists editupdatecourse={this.editupdatecourse} delcourse={this.delcourse} index={index} key={index} details={course}/> })
    return(
      <div className="container">
        <h2>Add Course List</h2>
        <div className="course-content">
          <Form currnt={this.state.currnt} addcourse={this.addcourse} updatechangecourse={this.updatechangecourse} />
           {showCourses}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Father />, document.getElementById("root"));






























// state ={
//   courses : [
//     { name : "HTML"} ,
//     { name : "JS"} ,
//     { name : "CSS"} 
//   ] ,
//   current : ''
// }
// //////////
// updatecourse = (e)=>{
//   this.setState({
//     current : e.target.value
//   })
// }
// ////////////
// addcourse =(e)=>{
//   e.preventDefault()
//   let courses = this.state.courses
//   let cure = this.state.current
//   courses.push({name : cure})
//   this.setState({
//     courses : courses ,
//     current : '' 
//   })
// }
// //////////////
// delcourse = (index) =>{
// let courses = this.state.courses ;
// courses.splice(index , 1 );
// this.setState({
//   courses : courses
// }) 
// }
// //////////////////
// editcourse = (index , value)=>{
// let courses = this.state.courses ;
// let course = courses[index] ; 
// course['name'] = value ; 
// this.setState({courses})
// }
// render(){
//   const {courses} = this.state ;
//   let lists = courses.map((course , index)=>{
//     return <Lists editcourse={this.editcourse} details={course}  key={index} index={index} delcourse={this.delcourse} />
//   })
//   return (
//     <section className="container">
//       <h2>Add Course App</h2>
//       <Form upcourse={this.updatecourse} addcourse={this.addcourse} current={this.state.current}/>
//       <ul>
//         {lists}
//       </ul>   
//     </section>
//   )
// }
