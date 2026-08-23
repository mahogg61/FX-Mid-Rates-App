USD Mid FX v2

Changes:
- Removed the daily-cached HexaRate fallback.
- Primary source is CurrencyExchangeTool, which states it fetches live mid-market rates from Yahoo Finance on every request.
- Adds cache-busting and no-cache request headers.
- Shows exact fetch time including seconds.
- States whether any rate actually changed on the last refresh.
- Shows weekend/market status.
- Any fallback is explicitly labelled central-bank/reference rather than live.
- Service worker updated to network-first so new versions are less likely to remain stuck in cache.

GitHub update:
Replace index.html, manifest.webmanifest and sw.js in the repository with these files, then commit.
