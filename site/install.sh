#!/bin/bash
# Installs (or updates) MeepLab.gg on a Mac: downloads the latest version from GitHub into Applications and opens it.
# Downloaded this way (not by a browser), macOS doesn't ask "Apple could not verify…" the first time.
# Usage: curl -fsSL https://meeplab-gg.vercel.app/install.sh | bash
set -euo pipefail
URL="https://github.com/13rianVargas/MeepLab.gg/releases/latest/download/MeepLab.gg-macOS.zip"
DEST="/Applications/MeepLab.gg.app"
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

[[ $(uname) == Darwin ]] || { echo "This installer is for macOS. On Windows, download MeepLab.gg from https://meeplab-gg.vercel.app"; exit 1; }
echo "Downloading MeepLab.gg…"
curl -fL --progress-bar "$URL" -o "$TMP/MeepLab.gg.zip"
ditto -x -k "$TMP/MeepLab.gg.zip" "$TMP"
[[ -d "$TMP/MeepLab.gg.app" ]] || { echo "The download didn't contain the app. Try again, or download it from https://meeplab-gg.vercel.app"; exit 1; }
# Replaces an older copy (quits it first); your games and settings live elsewhere and stay.
osascript -e 'tell application id "gg.draft.app" to quit' >/dev/null 2>&1 || true
sleep 1
rm -rf "$DEST"
ditto "$TMP/MeepLab.gg.app" "$DEST"
xattr -dr com.apple.quarantine "$DEST" 2>/dev/null || true
open "$DEST"
echo "MeepLab.gg is in Applications and open. From now on it updates itself."
