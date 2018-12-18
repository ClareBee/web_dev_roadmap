# Critical Render Path
Browser optimisation
html -> parsed by the browser -> the DOM tree (nodes/objects) (DOMContentLoaded)
link tag => css -> CSSOM
script tag => js -> manipulates DOM/CSSOM so needs both to be loaded
browser constructs render tree -> layout (positioning/sizing) -> paint (pixels)
'load' event on window = all resources loaded
html - 'render blocking', load styles at top, scripts at bottom

css - 'render blocking', so only load what's needed, above-the-fold prioritised (consider in-lining or internal style tag), media attributes, less specificity, combine files
defer loading below-the-fold stylesheet (using a window.onload function or a link preload `<link rel="preload" as="style" href="style.css" onload="this.rel='stylesheet'">`
link tag's media attributes - defaults to media="all" but can be more specific

js - parser-blocking when executing. script tags => async or defer attributes (async for 3rd party external scripts eg google analytics, defer for non-critical); minimize long-running js
js forces re-draw (usu partial?)
