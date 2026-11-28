#!/usr/bin/env bash
# Re-encode the clips shown on slides 14 and 15 (full length, <=720p H.264 + AAC) into deck/assets/video/.
# Usage: tools/encode_clips.sh <trail.mp4> <marathon.mp4> <speed-project.mp4> <trail-youtube.mp4>
# Sources: see docs/RUNBOOK.md (Drive ids and the YouTube id are in tools/pptx_to_deck.py, CLIPS).
set -euo pipefail
out="$(cd "$(dirname "$0")/.." && pwd)/deck/assets/video"
mkdir -p "$out"
enc() {
  ffmpeg -v error -y -i "$1" \
    -vf "scale=-2:'min(720,ih)'" \
    -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart "$out/$2"
}
enc "$1" trail-leire.mp4
enc "$2" maraton-barcelona.mp4
enc "$3" speed-project-finisher.mp4
enc "$4" trail-leire-yt.mp4
# Poster frame per clip (what the slide shows before the clip starts).
for f in trail-leire maraton-barcelona speed-project-finisher trail-leire-yt; do
  ffmpeg -v error -y -ss 0.5 -i "$out/$f.mp4" -frames:v 1 -q:v 4 "$out/$f.jpg"
done
ls -la "$out"
