import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useState } from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium'
import { grey } from '@mui/material/colors'
import { Link } from '@mui/material'

export default function HeaderPhoneNav() {
  const [state, setState] = useState({
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    // 跳出事件
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* 選單內容 */}
      <List>
        <Link href="/" underline="none" className="text-info">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={'Home'} />
            </ListItemButton>
          </ListItem>
        </Link>
        {['AboutMe', 'Resume', 'Project'].map((text, index) => (
          <Link
            key={text}
            href={`/${text} `}
            underline="none"
            className="text-info"
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  )

  return (
    <div className='d-sm-none'>
      {['right'].map((anchor) => (
        <div key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <DensityMediumIcon sx={{ color: grey[900] }} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </div>
      ))}
    </div>
  )
}
