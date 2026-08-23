Mid FX v4.1.6

RSI rendering fix:
- RSI is now drawn inside the SAME SVG as the working price chart.
- This removes the second-SVG mobile rendering problem entirely.
- Price occupies the upper section; RSI(14) occupies the lower section.
- RSI has 70, 50 and 30 guide lines plus overbought/oversold labels.
- Current RSI value is drawn inside the same SVG.
- Thin 1.3 px price line retained.
- 1Y remains the default chart period.
- Rates and calculations otherwise unchanged.

GitHub update:
Replace index.html, manifest.webmanifest and sw.js and commit.
