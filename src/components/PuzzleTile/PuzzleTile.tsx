import { hasSolvedPuzzle } from "../../state/game";
import { activeTiles, blankTileId, currentTileOrder } from "../../state/puzzle";
import { setActiveTiles } from "../../utils/setActiveTiles";
import "./PuzzleTile.css";

export const PuzzleTile = ({
	currentPosition,
	correctPosition,
	isHiddenTile,
}: {
	currentPosition: number;
	correctPosition: number;
	isHiddenTile: boolean;
}) => {
	const moveTile = (currentPosition: number, correctPosition: number) => {
		if (!currentTileOrder.value || !activeTiles.value) return;

		setActiveTiles(currentPosition);

		const currOrder = [...currentTileOrder.value];

		const blankTileIndex = currOrder.indexOf(blankTileId.value);
		const selectedIndex = currOrder.indexOf(correctPosition);

		const blankTile = currOrder[blankTileIndex];
		const selectedTile = currOrder[selectedIndex];

		// Reorder grid to move blank tile
		currOrder[blankTileIndex] = selectedTile;
		currOrder[selectedIndex] = blankTile;

		currentTileOrder.value = currOrder;
	};

	const cssClass =
		isHiddenTile && !hasSolvedPuzzle.value
			? { class: "puzzle-tile_hidden" }
			: {};

	const disabledState =
		hasSolvedPuzzle.value || !activeTiles.value?.includes(currentPosition)
			? { disabled: true }
			: {};

	return (
		<button
			onClick={() => moveTile(currentPosition, correctPosition)}
			{...cssClass}
			{...disabledState}
		>
			<big>{correctPosition}</big>
			{/* <br />
			Curr: {currentPosition} */}
		</button>
	);
};
