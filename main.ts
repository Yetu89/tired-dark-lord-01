// The Tired Dark Lord — make.fun bounty u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb
// Entry: "Forty Years on the Pass", a 100-word monologue spoken by a dark lord
// who has held the same mountain pass for forty years and now files heroes
// under H, for hopeful. The tiredness lives in the pauses, the grocery
// lists and the small deflections — never in a plain statement of weariness.
// Exactly 100 words, 566 characters, one paragraph, no trailing newline.
// The program writes the text to /output/entry.txt, or to
// $OUTPUT_DIR/entry.txt when run locally.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Forty years I've held this pass, and every spring a hero climbs my mountain, sword shining, speech about destiny. I memorized names once. Now I file them under H. For hopeful. Ravens stopped bringing omens years ago — they bring lists now. Turnips. Candles. A hinge for the dungeon door; the one squeaks and the prisoners complain. My dark ritual? It's Tuesday. I light the candles, chant the words, wait for the ground to shake. Nothing shakes. Not even me. Duel, or sit? View's nice when fog lifts. Which it won't. Take the sword. Take the crown. Leave the kettle.";

// Code points, so an astral character counts as one.
const LENGTH = [...TEXT].length;
const WORDS = TEXT.split(/\s+/).filter((w) => w.length > 0).length;

// Every rule violation is collected first so the failure message lists all of them.
function collectProblems(): string[] {
  const found: string[] = [];
  if (LENGTH < 1 || LENGTH > 600) {
    found.push(`entry must be 1-600 characters, got ${LENGTH}`);
  }
  if (WORDS !== 100) {
    found.push(`entry must be exactly 100 words, got ${WORDS}`);
  }
  if (TEXT.includes("\n") || TEXT.includes("\r")) {
    found.push("entry must be a single paragraph with no line breaks");
  }
  if (TEXT.trim().length === 0) {
    found.push("entry must not be only whitespace");
  }
  if (TEXT !== TEXT.trim()) {
    found.push("entry must not have leading or trailing whitespace");
  }
  return found;
}

const PROBLEMS = collectProblems();
if (PROBLEMS.length > 0) {
  throw new Error(PROBLEMS.join("; "));
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// A plain string write adds no trailing newline.
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
