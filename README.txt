Mid FX v4.1.5

RSI phone rendering fix:
- RSI moved out of the price-chart card into its own normal document-flow card.
- RSI SVG now has explicit HTML width/height attributes as well as CSS height.
- RSI viewBox increased to 150 px high.
- Mobile RSI card reserves at least 200 px and has bottom spacing.
- RSI calculation, 30/50/70 levels, price chart and 1Y default are unchanged.

GitHub update:
Replace index.html, manifest.webmanifest and sw.js and commit.
