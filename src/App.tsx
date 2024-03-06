import "./App.css";
import { ThemeContext } from "./contexts/themeContext";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeContext.Provider value="theme">
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;
