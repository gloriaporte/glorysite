import bubblegum from './bubblegum'

const themes = {
  bubblegum,
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

export { themes }
