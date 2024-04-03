export const getAdjacentItems = (
	gridSize: [number, number],
	clickedIndex: number
) => {
	const [rows, cols] = gridSize;

	// Convert clicked index to row and column coordinates
	const row = Math.floor((clickedIndex - 1) / cols);
	const col = (clickedIndex - 1) % cols;

	const adjacentIndices = [];

	// Check left
	if (col > 0) adjacentIndices.push(clickedIndex - 1);
	// Check right
	if (col < cols - 1) adjacentIndices.push(clickedIndex + 1);
	// Check top
	if (row > 0) adjacentIndices.push(clickedIndex - cols);
	// Check bottom
	if (row < rows - 1) adjacentIndices.push(clickedIndex + cols);

	return adjacentIndices;
};
