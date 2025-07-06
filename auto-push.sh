#!/bin/bash

echo "Watching for changes every 3 seconds..."

while true; do
  CHANGES=$(git status --porcelain)

  if [ ! -z "$CHANGES" ]; then
    echo "Changes detected. Pulling, committing and pushing..."
    git pull origin main --rebase
    git add .
    git commit -m "Auto commit on save"
    git push origin main
  fi

  sleep 3
done
