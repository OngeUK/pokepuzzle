import { useEffect } from "preact/hooks";
import { hasSolvedPuzzle, isGameActive, showGridLines } from "../../state/game";
import { currentTileOrder } from "../../state/puzzle";
import { fireConfetti } from "../../utils/confetti";
import { isPuzzleSolved } from "../../utils/isPuzzleSolved";
import { Layout } from "../Layout/Layout";
import { PuzzleImage } from "../PuzzleImage/PuzzleImage";

export const GameGrid = () => {
	useEffect(() => {
		hasSolvedPuzzle.value = isPuzzleSolved();

		if (isGameActive.value && hasSolvedPuzzle.value) {
			isGameActive.value = false;

			setTimeout(() => {
				showGridLines.value = false;
			}, 500);

			setTimeout(() => {
				fireConfetti();
			}, 1000);
		}
	}, [currentTileOrder.value]);

	return (
		<Layout>
			<PuzzleImage />
		</Layout>
	);
};
