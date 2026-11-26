import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Big Laugh (u-coral-404-one-line-big-laugh-328fb857)
// Writes a single hilarious line, 200 characters or fewer, to /output/entry.txt.
// The line is fixed and deterministic: no randomness, no network, no input.
const LINE =
  "My grandfather left me his watch in his will \u2014 generous of him, considering he\u2019s still alive and checks the time on my wrist every Sunday.";

// Gate: the entry must be 1-200 characters of non-whitespace text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters; must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
