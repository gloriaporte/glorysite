import ThemeIcon from '../icons/ThemeIcon'

function DesktopIcon({ icon, label, onClick }) {
  return (
    <button type="button" className="desktop-icon" onClick={onClick}>
      <span className="desktop-icon__image-wrap">
        <ThemeIcon
          name={icon}
          className="desktop-icon__image icon icon--theme"
          alt=""
        />
      </span>
      <span className="desktop-icon__label">{label}</span>
    </button>
  )
}

export default DesktopIcon
