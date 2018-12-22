## Next.js
`npm init -y`
`npm i next react react-dom`
`mkdir pages`
in package.json: `"start": "next"`

- no need to import React in components
- also deals w Webpack, code-splitting etc under the hood

## client-side routing
- uses `<Link>` imported from `next/link` with an `<a>` tag as child
