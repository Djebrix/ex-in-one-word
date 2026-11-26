// Describe Your Ex in One Word — entry program.
//
// Writes exactly one word to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Node 22, standard library only. Fully deterministic: no randomness,
// no clock, no network — every run writes the same 8 bytes.
//
// The word: "Recalled".
// The verdict: the ex was not dumped, they were recalled — like a faulty
// product the manufacturer had to take back. It lands at a glance as a
// one-word verdict on a former partner, with a precise absurdity (a
// factory recall) instead of a plain insult, and it carries a second
// reading for free: recalled, as in only remembered now.

import { mkdirSync, renameSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const WORD = 'Recalled';

// Gate self-check: the sealed scorer accepts only UTF-8 text of 1–111
// characters, not only whitespace, and the judge rewards exactly one
// word with no punctuation tricks. Fail loudly here rather than ship
// an entry the gate would refuse.
if (
  WORD.length < 1 ||
  WORD.length > 111 ||
  !/^\S+$/.test(WORD) ||
  !/^[A-Za-z]+$/.test(WORD)
) {
  throw new Error(`entry word fails the gate contract: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
// Write atomically (temp file + rename) so a killed or interrupted run
// can never leave a truncated entry.txt behind for the gate to read.
const outPath = join(outDir, 'entry.txt');
writeFileSync(`${outPath}.tmp`, WORD, 'utf8');
renameSync(`${outPath}.tmp`, outPath);
console.log(`wrote ${outPath} (${WORD.length} chars): ${WORD}`);
