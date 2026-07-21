import AboutWindow from '../components/sections/AboutWindow'
import EducationWindow from '../components/sections/EducationWindow'
import ExperienceWindow from '../components/sections/ExperienceWindow'
import MusicPlayerWindow from '../components/sections/MusicPlayerWindow'
import ProjectsWindow from '../components/sections/ProjectsWindow'
import SkillsWindow from '../components/sections/SkillsWindow'
import TodoListWindow from '../components/sections/TodoListWindow'

export const windowRegistry = {
  aboutme: AboutWindow,
  projects: ProjectsWindow,
  workexperience: ExperienceWindow,
  todolist: TodoListWindow,
  musicplayer: MusicPlayerWindow,
  education: EducationWindow,
  stacks: SkillsWindow,
}

/** Chrome variant per window id. Default is the OS-style `window`. */
export const windowChrome = {
  todolist: 'sticky',
  musicplayer: 'discman',
}
