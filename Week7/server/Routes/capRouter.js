const express = require("express")
const capRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const tweets = [
    {
        tweet: "Welcome to Tweeter!",
        author: "Anthony",
        __id: uuidv4()
    }
]

capRouter.get("/", (req, res) => {
    res.status(200).send(tweets)
})


capRouter.post("/", (req, res) => {
    const newTweet = req.body
    newTweet.__id = uuidv4()
    tweets.push(newTweet)
    res.status(201).send("Your tweet was added!")
})

capRouter.put("/:tweetID", (req, res) => {
    const tweetID = req.params.tweetID
    const tweetSearch = tweets.findIndex(tweet => tweet.__id === tweetID)
    const tweetUpdate = Object.assign(tweets[tweetSearch], req.body)
    res.status(201).send(tweetUpdate)
})

capRouter.delete("/:tweetID", (req, res) => {
    const tweetID = req.params.tweetID
    const tweetSearch = tweets.findIndex(tweet => tweet.__id === tweetID)
    tweets.splice(tweetSearch, 1)
    res.status(201).send("Tweet delete!")
})

capRouter.get("/search/author", (req, res, next) => {
    const name = req.query.author
    const specificAuthor = tweets.filter(tweet => tweet.author.toLowerCase() === name.toLowerCase())
    if(!specificAuthor){
        const error = new Error(`Tweeter named ${name} not found`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(specificTweet)
})

capRouter.get("/:tweetID", (req, res, next) => {
    const tweetID = req.params.tweetID
    const foundTweet = tweets.find(tweet => tweet.__id === tweetID)
    if(!foundTweet){
        const error = new Error("Tweet not found")
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundTweet)
})

module.exports = capRouter