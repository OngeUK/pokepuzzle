import { computed, signal } from "@preact/signals";

export const currentTileOrder = signal<number[] | null>(null);
export const gridSize = signal<[number, number]>([3, 3]);

export const gridTileCount = computed(() => {
	const [size] = gridSize.value;
	return size * size;
});

export const correctTitleOrder = computed(() => {
	const size = gridTileCount.value;
	const tiles = [];
	for (let i = 1; i <= size; i++) tiles.push(i);

	return tiles;
});

export const blankTileId = signal(gridTileCount.value);

export const activeTiles = signal<number[] | null>(null);
