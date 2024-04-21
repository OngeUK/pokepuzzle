//@ts-nocheck
import { flushSync } from "preact/compat";

export const handleViewTransition = (
	fn: Function,
	viewTransitionElement?: Element,
	viewTransitionName?: string
) => {
	if (!document.startViewTransition) {
		fn();
		return;
	}

	const toSetTransitionName = viewTransitionElement && viewTransitionName;

	if (toSetTransitionName)
		viewTransitionElement.style.viewTransitionName = viewTransitionName;

	document.startViewTransition(() => {
		flushSync(() => {
			fn();
			if (toSetTransitionName)
				viewTransitionElement.style.viewTransitionName = "";
		});
	});
};
