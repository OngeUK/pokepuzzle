import { correctTitleOrder, currentTileOrder } from "../state/puzzle";

export const isPuzzleSolved = () =>
	JSON.stringify(currentTileOrder.value) ===
	JSON.stringify(correctTitleOrder.value);
