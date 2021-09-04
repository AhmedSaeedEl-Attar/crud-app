import React from 'react'

export default function Form(props) {
    return (
        <form className="submit" onSubmit={props.addcourse}>
            <input value={props.currnt} onChange={props.updatechangecourse} type="text" placeholder="Add Course ...." />
            <input type="submit" value="Add" />
        </form>
    )
}












    //     <form onSubmit={props.addcourse}>
    //     <input id="name" onChange={props.upcourse} type="text" placeholder="Add Course ...." value={props.current} />
    //     <input type="submit" value="Add" />
    // </form>