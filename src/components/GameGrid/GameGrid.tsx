import { useEffect } from "preact/hooks";
import { hasSolvedPuzzle, selectedImage } from "../../state/game";
import {
	blankTileId,
	currentTileOrder,
	gridSize,
	gridTileCount,
} from "../../state/puzzle";
import { fireConfetti } from "../../utils/confetti";
import { isPuzzleSolved } from "../../utils/isPuzzleSolved";
import { easy, hard, veryEasy } from "../../utils/puzzleOptions";
import { randomiseArray } from "../../utils/randomiseArray";
import { setActiveTiles } from "../../utils/setActiveTiles";
import { PuzzleTile } from "../PuzzleTile/PuzzleTile";
import "./GameGrid.css";

export const GameGrid = () => {
	useEffect(() => {
		hasSolvedPuzzle.value = isPuzzleSolved();
	}, [currentTileOrder.value]);

	useEffect(() => {
		if (hasSolvedPuzzle.value) fireConfetti();
	}, [hasSolvedPuzzle.value]);

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
			<div
				data-size={gridSize.value[0]}
				data-image={selectedImage.value}
				class="game-grid"
			>
				{gridItems}
			</div>
			<br />
			<br />
			<button
				onClick={() => {
					currentTileOrder.value = veryEasy;
					setActiveTiles(gridTileCount.value);
				}}
			>
				Very easy
			</button>
			<br />
			<button
				onClick={() => {
					currentTileOrder.value = randomiseArray(easy)[0];
					setActiveTiles(gridTileCount.value);
				}}
			>
				Easy
			</button>
			<br />
			<button
				onClick={() => {
					currentTileOrder.value = randomiseArray(hard)[0];
					setActiveTiles(gridTileCount.value);
				}}
			>
				Hard
			</button>
			<br />
			<div>{currentTileOrder.value}</div>
			{hasSolvedPuzzle.value && <div>PUZZLE SOLVED!</div>}
		</>
	);
};
