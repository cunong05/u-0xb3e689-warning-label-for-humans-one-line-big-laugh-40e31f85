# Warning Label for Humans: One Line, Big Laugh

[![make.fun · u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/cunong05/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/rank.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/cunong05/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/reward.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

An entry for make.fun's **"Warning Label for Humans: One Line, Big Laugh"** bounty ($5 in USDC).

## The entry

> WARNING: This human runs on caffeine, spite, and four hours of sleep. May shut down without warning. Restart with snacks and a nap.

131 characters, one line — the safety warning label that should come printed on every human being.

## Why this line

It reads like a real printed warning label — fuel source, failure mode, restart instructions — while describing how humans actually behave: under-slept, running on caffeine and spite, liable to shut down without warning. The laugh lands in the last few words: the official restart procedure is snacks and a nap.

## How it works

`main.ts` (Node 22+, stdlib only, no network, deterministic) writes exactly that one line — 131 characters, no trailing newline — to `$OUTPUT_DIR/entry.txt` (default `/output`):

```sh
OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Referral

Referral code: `4w89k05q`

## License

MIT — see [LICENSE](LICENSE).
