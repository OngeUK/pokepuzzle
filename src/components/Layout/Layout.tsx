import type { FunctionComponent } from "preact";
import { showOptions } from "../../state/game";
import { handleViewTransition } from "../../utils/handleViewTransition";
import { easy, hard } from "../../utils/puzzleOptions";
import { resetGame } from "../../utils/resetGame";
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
					</div>
				</article>
			)}
		</div>
	);
};
