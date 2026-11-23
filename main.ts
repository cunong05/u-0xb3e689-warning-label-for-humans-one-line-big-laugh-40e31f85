// Warning Label for Humans — one line, big laugh (make.fun bounty).
//
// The brief: a single-line warning label that reads like it was printed
// on a human at the factory. The joke works because it borrows the dry,
// deadpan register of real safety labels — "WARNING: ... May shut down
// without warning. Restart with snacks and a nap." — and fills it with
// the three fuels every tired person actually runs on: caffeine, spite,
// and four hours of sleep. The punchline lands at the end, where a
// machine would say "restart the device" and this one says "restart
// with snacks and a nap", which is the part people quote back.
//
// The entry is exactly 131 characters, one line, no trailing newline:
//   "WARNING: This human runs on caffeine, spite, and four hours of
//    sleep. May shut down without warning. Restart with snacks and a
//    nap."
//
// Why the strict validation matters: the gate kit accepts only 1–160
// characters on a single line. A stray newline or a word over the limit
// would silently produce an entry that looks fine locally but fails the
// check, so the script validates the text, writes it, then re-reads the
// file and compares it byte-for-byte before reporting success.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "WARNING: This human runs on caffeine, spite, and four hours of sleep. May shut down without warning. Restart with snacks and a nap.";

// Gate-kit limits for this bounty.
const MIN_LENGTH = 1;
const MAX_LENGTH = 160;

// Step 1 — validate: one line, within the length gate, not blank.
// Fails loudly instead of writing a bad entry.
function validateEntry(text: string): void {
  const problems: string[] = [];
  if (text.length < MIN_LENGTH || text.length > MAX_LENGTH) {
    problems.push(`length ${text.length} outside ${MIN_LENGTH}-${MAX_LENGTH}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    problems.push("contains a line break");
  }
  if (text.trim().length === 0) {
    problems.push("is blank");
  }
  if (problems.length > 0) {
    throw new Error(
      `Invalid entry (${problems.join("; ")}): ${JSON.stringify(text)}`,
    );
  }
}

// Step 2 — write the entry to entry.txt inside the output directory.
function writeEntry(text: string, outputDir: string): string {
  mkdirSync(outputDir, { recursive: true });
  const target = join(outputDir, "entry.txt");
  writeFileSync(target, text, "utf8");
  return target;
}

// Step 3 — verify: read the file back and demand it matches exactly.
// This catches encoding surprises (e.g. an added newline) that a
// blind write would miss.
function verifyEntry(target: string, expected: string): void {
  const written = readFileSync(target, "utf8");
  if (written !== expected) {
    throw new Error(
      `Entry file mismatch: expected ${JSON.stringify(expected)}, ` +
        `got ${JSON.stringify(written)}`,
    );
  }
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
validateEntry(ENTRY);
const target = writeEntry(ENTRY, outputDir);
verifyEntry(target, ENTRY);
console.log(`Wrote ${ENTRY.length}-character entry to ${target}`);
