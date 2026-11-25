#!/usr/bin/env bash
set -euo pipefail
mkdir -p dist/server
archive="$(mktemp -d)"
trap 'rm -rf "$archive"' EXIT
zip -q -X "$archive/ai-portfolio-source.zip" worker/index.js scripts/build.sh package.json README.md .gitignore
cp worker/index.js dist/server/index.js
printf '\nconst sourceZip = "' >> dist/server/index.js
base64 < "$archive/ai-portfolio-source.zip" | tr -d '\n' >> dist/server/index.js
printf '";\n' >> dist/server/index.js
