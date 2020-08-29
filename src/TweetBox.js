import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Neelikanth",
      username: "neelikanthrocks@gmail.com",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://scontent.fvtz3-1.fna.fbcdn.net/v/t1.0-9/43022871_1373946072740001_527126636227723264_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=kQsv5XfcxaAAX8fVf6a&_nc_ht=scontent.fvtz3-1.fna&oh=1aa37771380eb6d82624c706d8910792&oe=5F6DB27D",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://scontent.fvtz3-1.fna.fbcdn.net/v/t1.0-9/43022871_1373946072740001_527126636227723264_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=kQsv5XfcxaAAX8fVf6a&_nc_ht=scontent.fvtz3-1.fna&oh=1aa37771380eb6d82624c706d8910792&oe=5F6DB27D" />

          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
