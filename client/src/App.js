import "./App.css";
import "./Cards/FlipCard";
import FlipCard from "./Cards/FlipCard";

function App() {
  return (
    <div className="App">
      {["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"].map(
        (number) => {
          return ["H", "C", "D", "S"].map((suit) => (
            <FlipCard card={`${number}${suit}`} />
          ));
        }
      )}
    </div>
  );
}

export default App;
