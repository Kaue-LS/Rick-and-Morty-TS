import { useState, useEffect } from 'react'

export function SwitchDevice() {
  const [test, setWindowSize] = useState<number>(getWindowSize())

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])
  const isMobile = test <= 640
  const isTablet = test <= 1024

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
