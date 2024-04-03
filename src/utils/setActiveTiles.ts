import { activeTiles, currentTileOrder, gridSize } from "../state/puzzle";
import { getAdjacentItems } from "./getAdjacentItems";

export const setActiveTiles = (position: number) => {
	const order = currentTileOrder.value;
	if (!order) return;

	activeTiles.value = getAdjacentItems(gridSize.value, position);
};
