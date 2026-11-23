// Warning Label for Humans: One Line, Big Laugh — make.fun bounty
// Writes exactly one line — the safety warning label that should come
// printed on every human being — to /output/entry.txt.
//
// The entry: "WARNING: This human runs on caffeine, spite, and four
// hours of sleep. May shut down without warning. Restart with snacks
// and a nap." — 131 characters, one line, no trailing newline.
// The joke lands in the last few words (restart with snacks and a
// nap), in the deadpan wording of a real printed warning label.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "WARNING: This human runs on caffeine, spite, and four hours of sleep. May shut down without warning. Restart with snacks and a nap.";

// Validation: the entry must be exactly one line, 1–160 characters,
// non-blank — anything else is a wrong entry, so fail loudly instead
// of writing it.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 160 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error(
    `Invalid entry: expected one line of 1-160 characters, got ${ENTRY.length} characters: ${JSON.stringify(ENTRY)}`,
  );
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");

// Re-check what was actually written: entry.txt must be exactly the
// entry above, one line, 1–160 characters, no trailing newline.
const written = readFileSync(join(outputDir, "entry.txt"), "utf8");
if (written !== ENTRY) {
  throw new Error(
    `Invalid entry file: expected ${JSON.stringify(ENTRY)}, got ${JSON.stringify(written)}`,
  );
}
