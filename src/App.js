import "./App.css";
import Header from "./Components/Header";
import Pages from "./Components/Pages";
import Person from "./Components/Person";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="person-container">
        <Person />
      </div>
      <Pages />
    </div>
  );
}

export default App;
