import { useEffect } from "preact/hooks";
import { hasSolvedPuzzle, isGameActive } from "../../state/game";
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
				fireConfetti();
			}, 700);
		}
	}, [currentTileOrder.value]);

	return (
		<Layout>
			<PuzzleImage />
		</Layout>
	);
};
