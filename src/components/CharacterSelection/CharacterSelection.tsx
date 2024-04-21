import { CHARACTER_COUNT } from "../../consts/characters";
import { selectedImage, showOptions } from "../../state/game";
import { handleViewTransition } from "../../utils/handleViewTransition";
import { PuzzleImage } from "../PuzzleImage/PuzzleImage";
import "./CharacterSelection.css";

export const CharacterSelection = () => {
	let options = [];

	for (let i = 1; i <= CHARACTER_COUNT; i++) {
		options.push(
			<button
				class="character-btn"
				onClick={() => {
					const imgElement = document.getElementById(`img-${i}`)!;
					handleViewTransition(
						() => {
							showOptions.value = true;
							selectedImage.value = i;
						},
						imgElement,
						"puzzle-image"
					);
				}}
			>
				<PuzzleImage imageId={i} />
			</button>
		);
	}

	return (
		<>
			<h1 class="character-heading">Select character</h1>
			<nav>
				<div class="character-items">{options}</div>
			</nav>
		</>
	);
};
