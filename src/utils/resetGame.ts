import { batch } from "@preact/signals";
import { hasSolvedPuzzle, isGameActive, selectedImage } from "../state/game";
import { correctTitleOrder, currentTileOrder } from "../state/puzzle";

export const resetGame = () => {
	batch(() => {
		isGameActive.value = false;
		hasSolvedPuzzle.value = true;
		selectedImage.value = null;
		currentTileOrder.value = correctTitleOrder.value;
	});
};
