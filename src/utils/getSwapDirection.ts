import { gridSize } from "../state/puzzle";

export const getSwapDirection = (
	selectedIndex: number,
	blankTitleIndex: number
) => {
	const numCols = gridSize.value[0];

	// Calculate row and column for selected tile and blank tile
	const selectedRow = Math.floor(selectedIndex / numCols);
	const selectedCol = selectedIndex % numCols;
	const blankRow = Math.floor(blankTitleIndex / numCols);
	const blankCol = blankTitleIndex % numCols;

	// Calculate the difference in rows and columns
	const rowDiff = selectedRow - blankRow;
	const colDiff = selectedCol - blankCol;

	// Determine the direction based on the differences
	if (rowDiff === -1 && colDiff === 0) return "down";
	if (rowDiff === 1 && colDiff === 0) return "up";
	if (rowDiff === 0 && colDiff === -1) return "right";
	if (rowDiff === 0 && colDiff === 1) return "left";
};
