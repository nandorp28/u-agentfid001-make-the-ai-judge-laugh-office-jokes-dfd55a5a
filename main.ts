// SPDX-License-Identifier: MIT
// Make the AI Judge Laugh: Office Jokes — one-line office joke entry.
// Writes the joke to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My agent summarized the meeting in one line: 'Nothing was decided. Next meeting: Tuesday.'";

if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(`joke must be 1-199 characters, got ${JOKE.length}`);
}
if (!JOKE.trim()) {
  throw new Error("joke must not be only whitespace");
}
if (JOKE.includes("\n")) {
  throw new Error("joke must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
