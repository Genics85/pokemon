import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

function Home() {
  const value = useContext(ThemeContext);
  return <div>{value}</div>;
}

export default Home;
