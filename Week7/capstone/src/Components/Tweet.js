import React, {useState} from "react"
import AddTweet from "./AddTweet"

function Tweet(props){
    const [editToggle, setEditToggle] = useState(false)
    function toggleOff() {
        setEditToggle(prevToggle => !prevToggle)
    }

    return (
        <div className= "tweet">
            { !editToggle ?
            <>
                <div className= "tweetBorder">
                    <h2>{props.tweet}</h2>
                </div>
                    <h4 className= "authorPos">By {props.author}</h4>
                
                <button className= "delete" onClick={() => props.deleteTweet(props.__id)}>Delete Tweet</button>
                <button className= "edit" onClick= {() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>
            :
            <>
                <AddTweet 
                    author= {props.author}
                    tweet= {props.tweet}
                    __id= {props.__id}
                    btnTxt= {props.btnTxt}
                    submit= {props.editTweet}
                />
                <button className= "edit" onClick= {toggleOff}>Close</button>
            </>
            }
        </div>
    )
}

export default Tweet