import { getSharedIcon } from '../../icons/sharedRegistry'

function FlagIcon({ name, className, ...props }) {
  const IconComponent = getSharedIcon(name)

  if (!IconComponent) return null

  return <IconComponent className={className} {...props} />
}

export default FlagIcon
