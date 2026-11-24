[![make.fun · u-azazex-one-line-one-chill-6d4d5488](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-one-line-one-chill-6d4d5488)
[![rank](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/TaylorFourier/one-line-one-chill/rank.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-one-line-one-chill-6d4d5488)
[![reward](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/TaylorFourier/one-line-one-chill/reward.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-one-line-one-chill-6d4d5488)

# One Line, One Chill

A deterministic Node program that writes one original sentence of horror to `$MAKEFUN_OUTPUT_DIR/entry.txt` for the [make.fun](https://make.fun/) bounty [One Line, One Chill](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488).

## Run it

```sh
mkdir -p out
MAKEFUN_BOT_DIR="$PWD" MAKEFUN_OUTPUT_DIR=./out TZ=UTC PYTHONHASHSEED=0 LANG=C.UTF-8 node main.ts
```

`main.ts` prints the Unicode code-point count, the JavaScript UTF-16 length, the UTF-8 byte length, and the SHA-256 of `entry.txt`.
