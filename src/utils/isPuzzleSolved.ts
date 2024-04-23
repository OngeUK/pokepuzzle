import { isGameActive } from "../state/game";
import { correctTitleOrder, currentTileOrder } from "../state/puzzle";

export const isPuzzleSolved = () =>
	isGameActive.value &&
	JSON.stringify(currentTileOrder.value) ===
		JSON.stringify(correctTitleOrder.value);
