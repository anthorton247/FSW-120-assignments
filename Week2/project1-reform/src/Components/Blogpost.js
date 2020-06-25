import React from "react"


function Blogpost(props) {
   const style = {
       textAlign: "center"

   }
    return (
       <div style={style}>
            <h1 style={{fontWeight: "Bolder"}}>{props.title}</h1>
            <h3>{props.subTitle}</h3>
            <span style={{fontStyle: "italic"}}>Posted by {props.author} on {props.date}</span>
            <hr />  
       </div>
   )
}

export default Blogpost