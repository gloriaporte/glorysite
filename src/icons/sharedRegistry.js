import flags from './flags'

export function getSharedIcon(name) {
  return flags[name] ?? null
}
