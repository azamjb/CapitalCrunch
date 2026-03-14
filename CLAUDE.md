# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Setup

This is a **Chrome Web Extension (Manifest v3)** with no build system or dependencies. There are no npm/build/test/lint commands.

**To load and test the extension:**
1. Open Chrome → `chrome://extensions`
2. Enable "Developer mode"
3. Click "Load unpacked" → select this directory
4. After making changes, click the refresh icon on the extension card

## Architecture

The extension has three components that communicate via Chrome sync storage:

**`background.js`** — Service worker that runs continuously. Manages `chrome.alarms` scheduling, listens to `chrome.storage.onChanged` to recreate alarms when settings change, and opens `popup.html` in a new tab when the "Refresh" alarm fires.

**`options.html/js`** — The default popup shown when clicking the extension icon. Lets users set the quiz interval (10m, 30m, 1h, 2h, 3h) and toggle play/pause. Writes to `chrome.storage.sync` keys: `interval` (minutes) and `isPaused` (boolean).

**`popup.html/js`** — The quiz UI opened as a new tab by the background service worker. Contains the hardcoded country→capital database (~195 countries), picks a random country, generates 4 shuffled choices (1 correct + 3 random wrong), shows feedback, then auto-closes after 2 seconds.

**State flow:** `options.js` writes to storage → `background.js` hears `onChanged` → clears old alarm, creates new one with updated interval → alarm fires → background opens `popup.html`.

## Key Implementation Details

- The countries/capitals database is a plain JS object embedded directly in `popup.js`
- Multiple-choice wrong answers are picked by randomly sampling other countries' capitals
- The quiz popup opens as a **tab** (`chrome.tabs.create`), not a popup window
- Both `options.js` and `background.js` listen to `chrome.storage.onChanged` — be careful not to create duplicate alarm logic
- Permissions required: `alarms`, `storage` (see `manifest.json`)
