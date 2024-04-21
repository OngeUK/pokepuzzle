import { selectedImage } from "../../state/game";
import { currentTileOrder, gridSize } from "../../state/puzzle";
import { PuzzleTile } from "../PuzzleTile/PuzzleTile";
import "./PuzzleImage.css";

export const PuzzleImage = ({
	imageId = selectedImage.value,
}: {
	imageId?: number | null;
}) => {
	const order = currentTileOrder.value;

	const gridItems = order.map((correctPosition, currentPositionIndex) => {
		const currentPosition = currentPositionIndex + 1;

		return (
			<PuzzleTile
				currentPosition={currentPosition}
				correctPosition={correctPosition}
			/>
		);
	});

	return (
		<div
			id={`img-${imageId}`}
			data-size={gridSize.value[0]}
			data-image={imageId}
			class="puzzle-image"
		>
			{gridItems}
		</div>
	);
};
