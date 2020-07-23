import React, { useState, useEffect} from 'react'
import axios from "axios"
import AddTweet from "./AddTweet"
import Tweet from "./Tweet"

function Tweeter() {
    const [tweets, setTweets] = useState([])

    const [editToggle, setEditToggle] = useState(false)
    function toggleOff() {
        setEditToggle(prevToggle => !prevToggle)
    }

  
    function getTweets() {
      axios.get("/tweeter")
        .then(res => setTweets(res.data))
        .catch(err => console.log(err))
    }
  
    function addTweet(newTweet){
      axios.post("/tweeter", newTweet)
        .then(res => setTweets(prevTweets => [...prevTweets, res.data]))
        .catch(err => console.log(err))
    }
  
    function deleteTweet(tweetID) {
      axios.delete(`/tweeter/${tweetID}`)
      .then(res => setTweets(prevTweets => prevTweets.filter(tweet => tweet.__id !== tweetID)))
      .catch(err => console.log(err))
    }
  
    function editTweet(updates, tweetID) {
      axios.put(`/tweeter/${tweetID}`, updates)
        .then(res => setTweets(prevTweets => prevTweets.map(tweet => tweet.__id !== tweetID ? tweet : res.data)))
        .catch(err => console.log(err))
    }

    useEffect(() => {
      getTweets()
    }, [])
    return (
        <div>
          <div className= "tweetContain">
            <h1 className= "header">Timeline</h1>
            {tweets.map(tweet => 
            <Tweet 
            {...tweet} 
            key= {tweet.__id}
            deleteTweet= {deleteTweet}
            editTweet= {editTweet}
            btnTxt= "Edit Tweet"/>)}
          </div>
          { !editToggle ?
            <>
              <div>
                  <button className= "addTweetButton"  onClick= {() => setEditToggle(prevToggle => !prevToggle)}>New Tweet</button>
              </div>
             
            </>
            :
            <>
              <div className= "addTweet">
                <AddTweet
                    class1= "author"
                    class2= "tweetBubble"
                    submit= {addTweet}
                    btnTxt= "Add Tweet"/>
                <button className= "addTweetButton" onClick= {toggleOff}>Close</button>
              </div>
            </>}
        </div>
      );
}

export default Tweeter