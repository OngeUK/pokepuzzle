import { isGameActive, showGridLines, showOptions } from "../state/game";
import { currentTileOrder, gridTileCount } from "../state/puzzle";
import { randomiseArray } from "./randomiseArray";
import { setActiveTiles } from "./setActiveTiles";

export const startGame = (difficulty: number[][]) => {
	const delay = 750;
	const shuffleDelay = 230;
	const puzzles = difficulty.length;

	showGridLines.value = true;
	showOptions.value = false;

	setTimeout(() => {
		const randomisedTiles = randomiseArray(difficulty);

		for (let i = 0; i < 5; i++) {
			setTimeout(() => {
				currentTileOrder.value = randomisedTiles[i];
			}, shuffleDelay * i);
		}
	}, delay);

	setTimeout(() => {
		isGameActive.value = true;
		setActiveTiles(gridTileCount.value);
	}, puzzles * shuffleDelay + delay);
};
