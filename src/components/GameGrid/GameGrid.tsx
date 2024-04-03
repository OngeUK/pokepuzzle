import { useEffect } from "preact/hooks";
import { hasSolvedPuzzle } from "../../state/game";
import {
	blankTileId,
	currentTileOrder,
	gridTileCount,
} from "../../state/puzzle";
import { isPuzzleSolved } from "../../utils/isPuzzleSolved";
import { randomiseGridOrder } from "../../utils/randomiseGridOrder";
import { setActiveTiles } from "../../utils/setActiveTiles";
import { PuzzleTile } from "../PuzzleTile/PuzzleTile";
import "./GameGrid.css";

export const GameGrid = () => {
	useEffect(() => {
		// Initialise puzzle
		randomiseGridOrder();
		setActiveTiles(gridTileCount.value);
	}, []);

	useEffect(() => {
		hasSolvedPuzzle.value = isPuzzleSolved();
	}, [currentTileOrder.value]);

	const order = currentTileOrder.value;

	if (!order) return null;

	const gridItems = order.map((correctPosition, currentPositionIndex) => {
		const currentPosition = currentPositionIndex + 1;
		const isHiddenTile = correctPosition === blankTileId.value;

		return (
			<PuzzleTile
				currentPosition={currentPosition}
				correctPosition={correctPosition}
				isHiddenTile={isHiddenTile}
			/>
		);
	});

	return (
		<>
			<div class="game-grid">{gridItems}</div>
			<br />
			<br />
			<button
				onClick={() => {
					randomiseGridOrder();
					setActiveTiles(gridTileCount.value);
				}}
			>
				Randomise Grid
			</button>
			<br />
			<button
				onClick={() => {
					currentTileOrder.value = [1, 2, 3, 4, 8, 5, 7, 6, 9];
					setActiveTiles(gridTileCount.value);
				}}
			>
				Very easy Grid
			</button>
			<div>{currentTileOrder.value}</div>
			{hasSolvedPuzzle.value && <div>PUZZLE SOLVED!</div>}
		</>
	);
};
