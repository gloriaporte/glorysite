export const EXPERIENCE_STORAGE_KEY = 'portfolio-experience-started'

export function hasStartedExperience() {
  return localStorage.getItem(EXPERIENCE_STORAGE_KEY) === 'true'
}

export function markExperienceStarted() {
  localStorage.setItem(EXPERIENCE_STORAGE_KEY, 'true')
}

export function clearExperienceStarted() {
  localStorage.removeItem(EXPERIENCE_STORAGE_KEY)
}

export function getInitialPhase() {
  return hasStartedExperience() ? 'portfolio' : 'intro'
}

// Para ver a intro de novo no dev: localStorage.removeItem('portfolio-experience-started')
