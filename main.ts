// One Letter: Coffee or Tea — make.fun bounty entry
//
// The brief asks for exactly one letter: A for coffee, B for tea.
// This entry answers A: coffee. Coffee is the bolder, more alive
// stance — the drink that wakes the day up and gets it moving —
// so it is the fuller, more vivid answer to the coffee-against-tea
// argument, and the truer one for anyone who starts their morning
// with a cup in hand.
//
// Writes the single letter to /output/entry.txt, nothing else:
// no newline, no explanation, no punctuation. Deterministic:
// the same byte on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "A"; // A = coffee

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");

// The gate requires exactly 1 UTF-8 character, not only whitespace:
// "A" is one byte, one character, and unmistakably coffee.
