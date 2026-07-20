function IconSvg({ children, className, viewBox = '0 0 24 24' }) {
  return (
    <svg
      viewBox={viewBox}
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}

export default IconSvg
