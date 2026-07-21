const wallpaperModules = import.meta.glob('./wallpapers/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})

const iconModules = import.meta.glob('./icons/*.png', {
  eager: true,
  import: 'default',
})

const cursorModules = import.meta.glob('./cursor/cursor-*.png', {
  eager: true,
  import: 'default',
})

function fileBaseName(path) {
  return path.split('/').pop().replace(/\.[^.]+$/, '')
}

const wallpapers = Object.fromEntries(
  Object.entries(wallpaperModules).map(([path, url]) => [fileBaseName(path), url]),
)

const icons = Object.fromEntries(
  Object.entries(iconModules).map(([path, url]) => [fileBaseName(path), url]),
)

/** Maps CSS cursor keywords → asset URLs (cursor-default.png → default). */
const cursors = Object.fromEntries(
  Object.entries(cursorModules).map(([path, url]) => {
    const base = fileBaseName(path).replace(/^cursor-/, '')
    return [base, url]
  }),
)

export default {
  id: 'bubblegum',
  defaultWallpaper: 'wallpaper1',
  wallpapers,
  icons,
  cursors,
}
