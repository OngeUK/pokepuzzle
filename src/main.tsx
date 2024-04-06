import { render } from "preact";
import { GameGrid } from "./components/GameGrid/GameGrid";
import "./styles.css";

const App = () => {
	return <GameGrid />;
};

render(<App />, document.querySelector("body")!);
