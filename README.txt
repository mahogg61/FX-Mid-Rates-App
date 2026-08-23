USD Mid FX
==========

What it does
------------
- USD is fixed as the base currency.
- Shows both:
    1 USD = foreign currency
    1 foreign-currency unit = USD
- 4, 5 or 6 decimals.
- Reorder currencies by drag-and-drop on desktop.
- On a phone, tap the ≡ handle to move a row upward one position.
- Add/remove/order settings persist on the device.
- No ads and no account.
- Auto-refresh: 30 sec / 1 min / 5 min / manual. Default is 1 minute.
- Refreshes immediately when you return to the app.

Rate sources
------------
1) Primary: CurrencyExchangeTool public API — advertised as live mid-market rates,
   sourced from Yahoo Finance, with no API key and browser CORS support.
2) Fallback: HexaRate — returns a documented "mid" field.
3) Final fallback: Frankfurter — central-bank reference rates. This is visibly
   labelled as a reference fallback and is NOT described as live interbank.

Important
---------
No free public web API can guarantee the same executable interbank quote as a
professional dealing terminal. This app is intended as a clean market-reference
screen, not as a trade execution price.

Use immediately
---------------
Open fx_mid_rates.html (same content as index.html) in a browser.

Install like an app / Add to Home Screen
----------------------------------------
For the full PWA experience, host the folder on any simple HTTPS static host
(GitHub Pages, Cloudflare Pages, Netlify, etc.), then open the URL in Chrome and
choose "Install app" / "Add to Home screen".

Files
-----
index.html
fx_mid_rates.html
manifest.webmanifest
sw.js
