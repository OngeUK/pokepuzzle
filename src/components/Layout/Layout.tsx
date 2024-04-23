import { batch } from "@preact/signals";
import type { FunctionComponent } from "preact";
import { isGameActive, showGridLines, showOptions } from "../../state/game";
import { currentTileOrder, gridTileCount } from "../../state/puzzle";
import { handleViewTransition } from "../../utils/handleViewTransition";
import { easy, hard, veryEasy } from "../../utils/puzzleOptions";
import { resetGame } from "../../utils/resetGame";
import { setActiveTiles } from "../../utils/setActiveTiles";
import { startGame } from "../../utils/startGame";
import "./Layout.css";

export const Layout: FunctionComponent = ({ children }) => {
	return (
		<div class="layout-grid">
			<nav>
				<button
					class="back-btn"
					onClick={() => handleViewTransition(() => resetGame())}
				>
					⌂<small>Home</small>
				</button>
			</nav>
			<main>{children}</main>
			{showOptions.value && (
				<article>
					<h1>Select difficulty</h1>
					<div class="choose-btns">
						<button onClick={() => startGame(easy)}>Easy</button>
						<button onClick={() => startGame(hard)}>Hard</button>
						{/* TEMP */}
						<button
							onClick={() => {
								batch(() => {
									showOptions.value = false;
									isGameActive.value = true;
									showGridLines.value = true;
									currentTileOrder.value = veryEasy;
									setActiveTiles(gridTileCount.value);
								});
							}}
						>
							V.easy
						</button>
					</div>
				</article>
			)}
		</div>
	);
};
