Mid FX v4

New:
- Tap any FX pair to open a mid-rate line chart.
- Periods: 1D, 1W, 1M, 3M, 1Y, 5Y, 10Y.
- 1W through 5Y use CurrencyExchangeTool history, the same provider as live rates.
- 1D stores the same live mid-rate feed locally every refresh, retaining about 26 hours.
- 10Y is visibly labelled as a secondary historical source because the primary provider supports a maximum of 5 years.
- Pair orientation stays in market convention (GBP/USD, EUR/USD, USD/JPY, etc.).
- Chart includes high, low, start, latest, absolute change, percentage change and pointer readout.

Note:
A new install will need to accumulate live samples before the 1D chart has a meaningful intraday line.

GitHub update:
Replace index.html, manifest.webmanifest and sw.js and commit.
