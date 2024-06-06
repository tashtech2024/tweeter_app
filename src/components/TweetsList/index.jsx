import { useState } from "react";
import Tweet from "../Tweet";
import CreateTweetForm from "../CreateTweetForm";
import { v4 as uuidv4 } from 'uuid';
import { data } from "../data/data";

import "./TweetsList.module.css";

function TweetsList({}) {
  const [tweets, setTweets] = useState(data);

  // Create New Tweet
  const addTweet = (newTweet) => {
    const tweetDoc = {
        content: newTweet,
        username: 'TashUno721',
        likes: 0,
        retweets: 0,
        timestamp: new Date(),
        id: uuidv4()
    }

    setTweets([tweetDoc, ...tweets ]);
  }
  //* Delete Tweet 
  const removeTweet = (tweetId) => {
    setTweets(tweets.filter(t => t.id !== tweetId));
  }
  // Update Tweet
  const updateTweet = (tweetId, newTweetContent) => {
    setTweets(tweets.map(t => {
      if (t.id === tweetId) {
          return {
            ...t,
            content: newTweetContent,
          }
      } else return t;
    }));
  }
  return (
    <div className="mt-4">
      <CreateTweetForm addTweet={addTweet}/>

      <section>
        {tweets.map((item) => (
          <Tweet tweet={item} key={item.id} removeTweet={removeTweet} updateTweet={updateTweet}/>
        ))}
      </section>
    </div>
  );
}

export default TweetsList;