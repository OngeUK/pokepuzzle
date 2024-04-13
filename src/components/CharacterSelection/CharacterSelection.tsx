import { CHARACTER_COUNT } from "../../consts/characters";
import { selectedImage, showOptions } from "../../state/game";
import { PuzzleImage } from "../PuzzleImage/PuzzleImage";
import "./CharacterSelection.css";

export const CharacterSelection = () => {
	let options = [];

	for (let i = 1; i <= CHARACTER_COUNT; i++) {
		options.push(
			<button
				class="character-btn"
				onClick={() => {
					showOptions.value = true;
					selectedImage.value = i;
				}}
			>
				<PuzzleImage imageId={i} />
			</button>
		);
	}

	return (
		<nav>
			<h1>Select character</h1>
			<div class="character-items">{options}</div>
		</nav>
	);
};
