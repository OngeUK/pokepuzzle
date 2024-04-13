import { batch } from "@preact/signals";
import { isGameActive, showOptions } from "../state/game";
import { currentTileOrder, gridTileCount } from "../state/puzzle";
import { randomiseArray } from "./randomiseArray";
import { setActiveTiles } from "./setActiveTiles";

export const startGame = (difficulty: number[][]) => {
	batch(() => {
		showOptions.value = false;
		isGameActive.value = true;
		currentTileOrder.value = randomiseArray(difficulty)[0];
		setActiveTiles(gridTileCount.value);
	});
};
