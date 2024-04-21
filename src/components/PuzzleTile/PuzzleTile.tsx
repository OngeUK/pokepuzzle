import { hasSolvedPuzzle } from "../../state/game";
import { activeTiles, blankTileId, currentTileOrder } from "../../state/puzzle";
import { getSwapDirection } from "../../utils/getSwapDirection";
import { handleViewTransition } from "../../utils/handleViewTransition";
import { setActiveTiles } from "../../utils/setActiveTiles";
import "./PuzzleTile.css";

export const PuzzleTile = ({
	currentPosition,
	correctPosition,
}: {
	currentPosition: number;
	correctPosition: number;
}) => {
	const currOrder = [...currentTileOrder.value];
	const blankTileIndex = currOrder.indexOf(blankTileId.value);
	const selectedIndex = currOrder.indexOf(correctPosition);

	const moveTile = (currentPosition: number) => {
		if (!currentTileOrder.value || !activeTiles.value) return;

		const blankTile = currOrder[blankTileIndex];
		const selectedTile = currOrder[selectedIndex];

		setActiveTiles(currentPosition);

		// Reorder grid to move blank tile
		currOrder[blankTileIndex] = selectedTile;
		currOrder[selectedIndex] = blankTile;

		currentTileOrder.value = currOrder;
	};

	const cssClass = {
		class: `puzzle-tile${
			hasSolvedPuzzle.value ? " puzzle-tile_reveal" : ""
		}`,
	};

	const isDisabled =
		hasSolvedPuzzle.value || !activeTiles.value?.includes(currentPosition);

	const handleClick = () => {
		handleViewTransition(
			() => moveTile(currentPosition),
			document.querySelector(`[data-id-current="${currentPosition}"]`)!,
			`puzzle-tile-${getSwapDirection(selectedIndex, blankTileIndex)}`
		);
	};

	return (
		<button
			data-id={correctPosition}
			data-id-current={currentPosition}
			{...(!isDisabled && { onClick: handleClick })}
			{...{ disabled: isDisabled }}
			{...cssClass}
		/>
	);
};
