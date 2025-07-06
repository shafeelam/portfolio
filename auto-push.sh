#!/bin/bash

echo "Watching for changes every 3 seconds..."

while true; do
  CHANGES=$(git status --porcelain)

  if [ ! -z "$CHANGES" ]; then
    echo "Changes detected. Committing, pulling (rebase), and pushing..."
    git add .
    git commit -m "Auto commit on save"
    git pull --rebase origin main
    git push origin main
  else
    echo "No changes detected."
  fi

  sleep 3
done
