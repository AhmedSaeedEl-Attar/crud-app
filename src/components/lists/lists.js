import React, { Component ,Fragment } from 'react'

export default class Lists extends Component {
    state={
        isEdit : false
    }
    editToggle =()=>{
        let {isEdit} = this.state
        this.setState({
            isEdit : !isEdit
        })
    }
    rendercourser = ()=>{
        return (
            <div className="course-item">
                <div className="course-name">{this.props.details.name}</div>
                <div onClick={this.editToggle} className="edit-course">Edit Course</div>
                <div onClick={ ()=> this.props.delcourse(this.props.index)} className="update-course">Remove Course</div>
            </div>
        )
    }
    // runupdate 
    runupdate = (e)=>{
        e.preventDefault();
        this.props.editupdatecourse(this.props.index , this.input.value) 
        this.editToggle()
    }
    renderupdatecourse = ()=>{
        return (
            <form onSubmit={this.runupdate} className="update-form">
                <input ref={v => this.input = v} type="text" defaultValue={this.props.details.name} />
                <input type="submit"  value="Update" />
            </form>
        )
    }
    render(){
        let {isEdit} = this.state
        return (
            <Fragment>
                {isEdit ? this.renderupdatecourse() : this.rendercourser() }
            </Fragment>
        )
    }
    
}








































// state = {
//     isEdit : false 
// }
// rendercourses = ()=>{ return ( <li>
//     <span>{this.props.details.name}</span> 
//     <button onClick={()=> {this.props.delcourse(this.props.index)}}>Remove</button> 
//     <button onClick={this.toggleedit}>Update</button>
//     </li>)}

//     toggleedit =()=>{
//         let {isEdit} = this.state ; 
//         this.setState({
//             isEdit : !isEdit
//         })
//     }
    
//     editcourse =(e)=>{
//         e.preventDefault()
//         this.props.editcourse(this.props.index , this.input.value) ; 
//         this.toggleedit();
//     }
//     renderupdate =()=>{
//         return(
//             <form onSubmit={this.editcourse}>
//                 <input type="text" ref={v => this.input = v} defaultValue={this.props.details.name} />
//                 <input type="submit" value="update" />
//             </form>
//         )
//     }

// render() {
//     let {isEdit} =this.state
//     return (
//         <Fragment>
//             {isEdit ? this.renderupdate() : this.rendercourses()}
//         </Fragment>
//     )
// }