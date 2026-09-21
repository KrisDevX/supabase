const { readFileSync } = require('node:fs')
const path = require('node:path')

// @shadcn/lint 0.1.1 recognizes --color-* but not these older Tailwind v4
// namespaces. Keep the compatibility list tied to declarations in the theme
const theme = readFileSync(path.join(__dirname, '../config/css/theme.css'), 'utf8')

function namesFor(namespace) {
  return [...theme.matchAll(new RegExp(`--${namespace}-color-([\\w-]+)\\s*:`, 'g'))].map(
    ([, name]) => name
  )
}

const background = namesFor('background').map((name) => `bg-${name}`)
const text = namesFor('text').map((name) => `text-${name}`)
const border = namesFor('border').flatMap((name) =>
  ['', '-t', '-r', '-b', '-l', '-x', '-y', '-s', '-e'].map((edge) => `border${edge}-${name}`)
)

module.exports = [...background, ...border, ...text]
