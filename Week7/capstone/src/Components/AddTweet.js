import React, {useState} from "react"


function AddTweet(props){
    
    const initInputs = {
        author: props.author|| "",
        tweet: props.tweet || "",

    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(event) {
        const {name, value} = event.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(event) {

        props.submit(inputs, props.__id)
        setInputs(initInputs)
    }

    return (
        <form className= "input">
            <input 
                className= {props.class2}
                type= "text"
                name= "tweet"
                placeholder= "Tweet your thoughts"
                value= {inputs.tweet}
                onChange= {handleChange}/>
            <input
                className= {props.class1}
                type= "text" 
                name= "author"
                placeholder= "Author"
                value= {inputs.author}
                onChange= {handleChange}/>
            <button onClick= {handleSubmit}>{props.btnTxt}</button>
        </form>
    )
}

export default AddTweet



