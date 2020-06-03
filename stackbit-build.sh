#!/usr/bin/env bash

set -e
set -o pipefail
set -v

curl -s -X POST https://api.stackbit.com/project/5ed7a6431c72cc001aae27e2/webhook/build/pull > /dev/null
npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://api.stackbit.com/pull/5ed7a6431c72cc001aae27e2
curl -s -X POST https://api.stackbit.com/project/5ed7a6431c72cc001aae27e2/webhook/build/ssgbuild > /dev/null
gatsby build
curl -s -X POST https://api.stackbit.com/project/5ed7a6431c72cc001aae27e2/webhook/build/publish > /dev/null
