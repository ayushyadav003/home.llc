import { useState } from 'react'
import { Drawer } from '@mui/material'
import './header.scss'
import { Close, LocationOn } from '@mui/icons-material'

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <div className="headerContainer">
      <div>
        <img src="/images/hamburger.png" onClick={() => setOpen(true)} />
        <img src="/images/search.png" />
      </div>
      <Drawer anchor={'left'} open={open}>
        <div className="sideBarWrapper">
          <div className="header">
            <Close fontSize="large" onClick={() => setOpen(false)} />
            <span>Live</span>
          </div>
          <div className="sidebarContent">
            <div>
              <LocationOn />
              <p>CURRENT LOCATION</p>
            </div>
            <h2>
              New York, <br /> United States
            </h2>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Header
