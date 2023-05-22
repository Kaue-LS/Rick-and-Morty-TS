import { useState, useEffect } from 'react'

export function SwitchDevice() {
  const [windowSize, setWindowSize] = useState<number>(getWindowSize())

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])
  const isMobile = windowSize <= 640
  const isTablet = windowSize <= 1024

  return {
    isMobile,
    isTablet,
  }
}
function getWindowSize() {
  const { innerWidth } = window
  return innerWidth
}

export default SwitchDevice
