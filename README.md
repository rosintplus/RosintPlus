# rOSINT+ — Fork of rosint.dev

**Reddit user intelligence tool**: search any Reddit user's full post and comment history — including private accounts, removed comments, and deleted content — straight from open-source archives, entirely in your browser.

This is a fork of **[rosint.dev](https://rosint.dev)** (MIT), extended with profile analytics, saved profiles, themes, localization, and more.

## Screenshots

![Home](docs/screenshots/home.png)

![Search results](docs/screenshots/results.png)

![Profile stats](docs/screenshots/stats.png)

## Features

- **Dual-source search** — Arctic Shift and PullPush queried in parallel, results merged and deduplicated by post/comment ID
- **Posts & comments** — title, subreddit, score, comment count, timestamp, thumbnail, body snippet; full comment bodies with links to the original thread
- **Removed vs. deleted** — status badges distinguish mod-removed, self-deleted, admin, and spoiler content
- **Comment threads** — load the parent comment, view the full thread, and expand nested archived replies inline
- **Advanced filters** — date range (calendar picker), subreddit, deleted-only, NSFW-only, and newest/oldest sort
- **Keyword filter** — instantly narrow the loaded results by title, body, subreddit, or flair
- **Pagination** — timestamp-based cursor pagination (100 results per page)
- **No login required** — fully frontend, no backend, no accounts

### Added in this fork

- **Profile analytics** — a stats panel with top subreddits, an activity heatmap (with an estimated timezone), and most-common words
- **Saved profiles** — pin profiles to disk (IndexedDB) so they survive a refresh, plus recent-search history
- **9 color themes** — Default, Nord, Catppuccin, Cyber, Mono, Gruvbox, Dracula, Solarized, and Synthwave — each with light / dark / auto modes (see [Themes](#themes))
- **6 languages** — English, Español, Français, Deutsch, 日本語, and 中文, with locale-aware dates and relative times
- **Export** — download the current result set as CSV or JSON
- **Copy permalink** — one click copies the permalink, timestamp, and details
- **Keyboard accessible** — visible focus rings, escape-to-close menus, and a skip-to-content link
- **Privacy-first** — no cookies, no analytics, no tracking, and a dedicated privacy page
- **Snappy** — off-screen result virtualization, non-blocking keyword filtering, and skeleton loading states

## Themes

Nine built-in themes, each with light, dark, and auto (system) modes.

| | |
|---|---|
| ![Default](docs/screenshots/theme-default.png) **Default** | ![Nord](docs/screenshots/theme-nord.png) **Nord** |
| ![Catppuccin](docs/screenshots/theme-catppuccin.png) **Catppuccin** | ![Cyber](docs/screenshots/theme-cyber.png) **Cyber** |
| ![Mono](docs/screenshots/theme-mono.png) **Mono** | ![Gruvbox](docs/screenshots/theme-gruvbox.png) **Gruvbox** |
| ![Dracula](docs/screenshots/theme-dracula.png) **Dracula** | ![Solarized](docs/screenshots/theme-solarized.png) **Solarized** |
| ![Synthwave](docs/screenshots/theme-synthwave.png) **Synthwave** | |

## Running locally

```bash
git clone https://github.com/zuxu4n/rosint-plus.git
cd rosint-plus
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## "Backend"

Both APIs are queried with the same parameters:

```
Arctic Shift:  https://arctic-shift.photon-reddit.com/api/posts/search?author={username}&limit=100&sort=desc
PullPush:      https://api.pullpush.io/reddit/search/submission/?test&author={username}&limit=100&sort=desc
```

## Limitations

- Archive data may not capture all recent posts
- Arctic Shift and PullPush have no guaranteed uptime
- If both APIs are down, no results will be returned

## Credits

- **[rosint.dev](https://rosint.dev)** — the original project this fork is based on (MIT)
- [Arctic Shift](https://github.com/ArthurHeitmann/arctic_shift) by ArthurHeitmann
- [PullPush](https://pullpush.io)
