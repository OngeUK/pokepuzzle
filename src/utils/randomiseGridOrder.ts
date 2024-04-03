import {
	correctTitleOrder,
	currentTileOrder,
	gridTileCount,
} from "../state/puzzle";

export const randomiseGridOrder = () => {
	const size = gridTileCount.value;
	const tiles = correctTitleOrder.value;

	let randomised = tiles
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value)
		.filter((value) => value !== size);

	randomised.push(size);
	currentTileOrder.value = randomised;
};
