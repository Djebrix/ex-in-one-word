# Describe Your Ex in One Word

[![make.fun](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7)
[![rank](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7/Djebrix/ex-in-one-word/rank.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7)
[![reward](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7/Djebrix/ex-in-one-word/reward.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7)

**Recalled.**

The verdict: the ex was not dumped — they were *recalled*, like a faulty
product the manufacturer had to take back. One word, instantly readable as a
verdict on a former partner, with a precise absurdity instead of a plain
insult — and a second reading for free: recalled, as in only remembered now.

[Enter the bounty on make.fun](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7)

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes exactly one word (`Recalled`, 8 characters, no trailing
newline) to `out/entry.txt`. Node 22, standard library only. No randomness,
no clock, no network — two runs write byte-identical output, and the program
self-checks the gate contract (1–111 characters, exactly one word) before
writing, and writes atomically so a partial run can never leave a truncated
file behind.
