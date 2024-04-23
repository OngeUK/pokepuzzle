// Confetti.js.org
export const fireConfetti = () => {
	const duration = 5 * 1000,
		animationEnd = Date.now() + duration,
		defaults = {
			startVelocity: 30,
			spread: 280,
			ticks: 40,
			zIndex: 0,
		};

	const randomInRange = (min, max) => {
		return Math.random() * (max - min) + min;
	};

	const interval = setInterval(() => {
		const timeLeft = animationEnd - Date.now();

		if (timeLeft <= 0) {
			return clearInterval(interval);
		}

		const particleCount = 30 * (timeLeft / duration);

		// since particles fall down, start a bit higher than random
		confetti(
			Object.assign({}, defaults, {
				particleCount,
				origin: {
					x: randomInRange(0.1, 0.4),
					y: Math.random() - 0.2,
				},
			})
		);
		confetti(
			Object.assign({}, defaults, {
				particleCount,
				origin: {
					x: randomInRange(0.6, 0.9),
					y: Math.random() - 0.2,
				},
			})
		);
	}, 250);
};
