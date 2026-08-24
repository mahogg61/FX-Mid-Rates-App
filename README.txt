Mid FX v4.1.8

Built directly from the known-good v4.1.7 baseline.

Live-rate change only:
- Primary live feed changed from CurrencyExchangeTool/Yahoo Finance to BiQuote.
- Uses BiQuote's documented `mid` field (midpoint of bid and ask).
- Correctly normalizes market-convention pairs:
    GBPUSD / EURUSD / AUDUSD / NZDUSD are inverted internally to USD-base rates.
    USDJPY / USDCHF / USDCAD / USDTHB etc. are used directly.
- If the preferred pair orientation is unavailable, the app tries the inverse symbol.
- If BiQuote has no live symbol for a currency, the existing Frankfurter reference fallback remains clearly labelled.
- The status line now shows the actual latest BiQuote quote timestamp when available.

Unchanged from v4.1.7:
- Layout and phone behavior
- Market-practice pair display
- Cross-rate calculations
- 1Y default chart
- Historical chart implementation
- RSI(14) implementation
- Thin price-chart line

Note:
Historical charts remain on the existing historical feeds in this version. Only the live-rate engine changed.

GitHub update:
Replace index.html, manifest.webmanifest and sw.js and commit.
