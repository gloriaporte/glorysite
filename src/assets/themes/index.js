import bubblegum from './bubblegum'

const themes = {
  bubblegum,
}

/** Hotspot (x y) + CSS fallback keyword per cursor. */
const CURSOR_META = {
  default: { hotspot: '0 0', fallback: 'default' },
  pointer: { hotspot: '6 0', fallback: 'pointer' },
  text: { hotspot: '8 12', fallback: 'text' },
  wait: { hotspot: '16 16', fallback: 'wait' },
}

export function getTheme(themeId) {
  return themes[themeId] ?? themes.bubblegum
}

export function getThemeWallpaper(themeId, wallpaperId) {
  const theme = getTheme(themeId)
  const id = wallpaperId ?? theme.defaultWallpaper
  return theme.wallpapers[id] ?? theme.wallpapers[theme.defaultWallpaper]
}

export function getThemeIconUrl(themeId, iconName) {
  const theme = getTheme(themeId)
  return theme.icons[iconName] ?? null
}

export function getThemeCursorUrl(themeId, cursorName) {
  const theme = getTheme(themeId)
  return theme.cursors?.[cursorName] ?? null
}

export function applyThemeCursors(themeId) {
  const root = document.documentElement
  const theme = getTheme(themeId)

  for (const [name, meta] of Object.entries(CURSOR_META)) {
    const url = theme.cursors?.[name]
    if (!url) {
      root.style.removeProperty(`--cursor-${name}`)
      continue
    }

    root.style.setProperty(
      `--cursor-${name}`,
      `url("${url}") ${meta.hotspot}, ${meta.fallback}`,
    )
  }
}

export { themes }
