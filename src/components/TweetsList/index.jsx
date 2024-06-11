import { Suspense, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { ErrorBoundary } from "react-error-boundary";
import Tweet from "../Tweet";
import CreateTweetForm from "../CreateTweetForm";
import { data } from "../../data/data";
import axios from "axios";

import "./TweetsList.module.css";

function TweetsList() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get("http://localhost:4000/tweets");
        console.log(res.data);
        setTweets([...res.data]);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const addTweet = async (newTweet) => {
    // const tweetDoc = {
    //   content: newTweet,
    //   username: "abe123",
    //   likes: 0,
    //   retweets: 0,
    //   timestamp: new Date(),
    //   id: uuidv4(),
    // };

    // setTweets([tweetDoc, ...tweets]);

    try {
      const res = await axios.post("http://localhost:4000/tweets", {
        newTweet,
        username: "abe123",
      });
      console.log(res.data);
      setTweets([res.data, ...tweets]);
    } catch (error) {
      console.log(error);
    }
  };

  const removeTweet = (tweetId) => {
    setTweets(tweets.filter((t) => t._id !== tweetId));
  };

  const updateTweet = (tweetId, newTweetContent) => {
    setTweets(
      tweets.map((t) => {
        if (t.id === tweetId) {
          return {
            ...t,
            content: newTweetContent,
          };
        } else {
          return t;
        }
      }),
    );
  };

  return (
    <div className="mt-4">
      <CreateTweetForm addTweet={addTweet} />

      {/* <ErrorBoundary fallback={<div>Error loading Tweets!</div>}>
        <Suspense fallback={<div>Loading...</div>}> */}
      <section>
        {tweets.map((item) => (
          <Tweet
            tweet={item}
            key={item._id ? item._id : item.id}
            removeTweet={removeTweet}
            updateTweet={updateTweet}
          />
        ))}
      </section>
      {/* </Suspense>
      </ErrorBoundary> */}
    </div>
  );
}

export default TweetsList;