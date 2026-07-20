export const desktopIcons = [
  { id: 'aboutme', icon: 'aboutme', labelKey: 'menu.about' },
  { id: 'projects', icon: 'projects', labelKey: 'menu.projects' },
  { id: 'workexperience', icon: 'workexperience', labelKey: 'menu.experience' },
  { id: 'todolist', icon: 'todolist', labelKey: 'menu.todolist' },
  { id: 'musicplayer', icon: 'musicplayer', labelKey: 'menu.musicplayer' },
  { id: 'education', icon: 'education', labelKey: 'menu.education' },
  { id: 'stacks', icon: 'stacks', labelKey: 'menu.skills' },
]

function getNestedLabel(translations, key) {
  return key.split('.').reduce((value, part) => value?.[part], translations)
}

export function getDesktopIconLabel(translations, labelKey) {
  return getNestedLabel(translations, labelKey) ?? labelKey
}
