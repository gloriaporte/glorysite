const wallpaperModules = import.meta.glob('./wallpapers/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})

const iconModules = import.meta.glob('./icons/*.png', {
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

export default {
  id: 'bubblegum',
  defaultWallpaper: 'wallpaper1',
  wallpapers,
  icons,
}
