import { signal } from "@preact/signals";

export const hasSolvedPuzzle = signal(true);

export const selectedImage = signal<number | null>(null);

export const isGameActive = signal(false);

export const showGridLines = signal(false);

export const showOptions = signal(true);
