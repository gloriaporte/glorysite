export const THEME_STORAGE_KEY = 'portfolio-theme'

export const themes = {
  bubblegum: {
    id: 'bubblegum',
    label: 'Bubblegum',
    defaultWallpaper: 'wallpaper1',
  },
}

export const DEFAULT_THEME_ID = 'bubblegum'

const FORCE_DEFAULT_THEME = true

export function getStoredThemeId() {
  if (FORCE_DEFAULT_THEME) return DEFAULT_THEME_ID

  const stored = localStorage.getItem(THEME_STORAGE_KEY)
  return stored && themes[stored] ? stored : DEFAULT_THEME_ID
}

export function applyTheme(themeId) {
  const id = FORCE_DEFAULT_THEME
    ? DEFAULT_THEME_ID
    : themes[themeId]
      ? themeId
      : DEFAULT_THEME_ID

  document.documentElement.dataset.theme = id

  if (!FORCE_DEFAULT_THEME) {
    localStorage.setItem(THEME_STORAGE_KEY, id)
  }

  return id
}
