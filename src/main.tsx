import { render } from "preact";
import { CharacterSelection } from "./components/CharacterSelection/CharacterSelection";
import { GameGrid } from "./components/GameGrid/GameGrid";
import { selectedImage } from "./state/game";
import "./styles.css";

const App = () => {
	const output = selectedImage.value ? <GameGrid /> : <CharacterSelection />;
	return (
		<div class={`container${selectedImage.value ? " container_full" : ""}`}>
			{output}
		</div>
	);
};

render(<App />, document.querySelector("body")!);

if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("https://pokepuzzle.onge.uk/sw.js")
			.catch((error) => {
				console.error("Registration failed: ", error);
			});
	});
}
