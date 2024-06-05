import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa";
import { LiaRetweetSolid } from "react-icons/lia";
import styles from "./Tweet.module.css";

function Tweet({ tweet }) {
  return (
    <div className={styles.container}>
      <div>{tweet.username}</div>
      <div>{tweet.content}</div>
      <div>
        <div>
          <FaHeart /> {tweet.likes}
        </div>
        <div>
          <LiaRetweetSolid size={22} /> {tweet.retweets}
          <div>
        <button>delete</button>
      </div>
        </div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object,
};

export default Tweet;