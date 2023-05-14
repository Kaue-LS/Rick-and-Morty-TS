import React from 'react'
import SwitchDevice from '../device/switchDevice'
import NavBarDesktop from './navBarDesktop'
import NavBarMobile from './navBarMobile'
export default function NavBar() {
  const { isTablet } = SwitchDevice()

  return isTablet ? <NavBarMobile /> : <NavBarDesktop />
}
