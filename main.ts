// Fortune Cookie Funnies for Engineers — make.fun entry.
// Writes one fortune cookie line for a software engineer to /output/entry.txt.
// The grader sandbox has a read-only working directory, so this program
// performs no relative writes at all: only the absolute /output path is used.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You will finally understand the legacy code the day before it is deleted.";

// Gate: /output/entry.txt must be UTF-8 text of 1-120 characters.
if (LINE.length < 1 || LINE.length > 120 || !LINE.trim()) {
  throw new Error(`fortune line is ${LINE.length} chars, outside the 1-120 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
