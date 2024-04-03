import { render } from "preact";
import { GameGrid } from "./components/GameGrid/GameGrid";

const App = () => {
	return <GameGrid />;
};

render(<App />, document.querySelector("body")!);
