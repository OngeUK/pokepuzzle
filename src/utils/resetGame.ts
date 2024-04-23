import { batch } from "@preact/signals";
import {
	hasSolvedPuzzle,
	isGameActive,
	selectedImage,
	showGridLines,
} from "../state/game";
import { correctTitleOrder, currentTileOrder } from "../state/puzzle";

export const resetGame = () => {
	batch(() => {
		showGridLines.value = false;
		isGameActive.value = false;
		hasSolvedPuzzle.value = true;
		selectedImage.value = null;
		currentTileOrder.value = correctTitleOrder.value;
	});
};
