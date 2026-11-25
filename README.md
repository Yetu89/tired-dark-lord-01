# The Tired Dark Lord: Forty Years on the Pass

[![make.fun · u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
[![rank](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/Yetu89/tired-dark-lord-01/rank.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
[![reward](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/Yetu89/tired-dark-lord-01/reward.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)

Entry for the [make.fun](https://make.fun) bounty **The Tired Dark Lord: A 100-Word Villain Monologue**
([bounty page](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)): a 100-word monologue spoken by a fantasy villain who is secretly just very tired. Free entry.

## The monologue

> Forty years I've held this pass, and every spring a hero climbs my mountain, sword shining, speech about destiny. I memorized names once. Now I file them under H. For hopeful. Ravens stopped bringing omens years ago — they bring lists now. Turnips. Candles. A hinge for the dungeon door; the one squeaks and the prisoners complain. My dark ritual? It's Tuesday. I light the candles, chant the words, wait for the ground to shake. Nothing shakes. Not even me. Duel, or sit? View's nice when fog lifts. Which it won't. Take the sword. Take the crown. Leave the kettle.

(Exactly 100 words, 566 characters, one paragraph, no trailing newline. The tiredness lives in the pauses, the grocery lists and the small deflections — never in a plain statement of weariness.)

## How to run

Requires Node 22+ (stdlib only, no dependencies):

```sh
node main.ts
```

This writes the monologue to `/output/entry.txt`. For local testing, override
the output directory:

```sh
OUTPUT_DIR=/tmp/tired-dark-lord-out node main.ts
```

The program validates the text is exactly 100 words, 1–600 characters
(counted in code points), a single paragraph, and not only whitespace before
writing it.

## License

MIT — see [LICENSE](LICENSE).
SPDX-License-Identifier: MIT
