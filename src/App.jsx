import { Container } from "react-bootstrap";
import "./App.css";
import TweetsList from "./components/TweetsList";

function App() {
  return (
    <Container>
      <h1>Tweeter App</h1>

      <TweetsList />
    </Container>
  );
}

export default App;