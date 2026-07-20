import Scanlines from './Scanlines'

function CRTScreen({ children }) {
  return (
    <div className="crt-screen">
      <div className="crt-screen__content">{children}</div>
      <Scanlines />
      <div className="vhs-noise" aria-hidden="true" />
    </div>
  )
}

export default CRTScreen
