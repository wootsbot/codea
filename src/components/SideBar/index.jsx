//@flow

import React from 'react'

import SubtitlesTwoTone from '@material-ui/icons/SubtitlesTwoTone'
import CodeTwoToneIcon from '@material-ui/icons/CodeTwoTone'
import LaptopTwoTone from '@material-ui/icons/LaptopTwoTone'
// eslint-disable-next-line max-len
import SupervisorAccountTwoTone from '@material-ui/icons/SupervisorAccountTwoTone'

import { getPaths, pathsKey } from 'utils/paths'

import NavItem from './SideItem'
import styles from './SideBar.module.scss'

const iconsOfPath = {
  [pathsKey.POSTS]: <SubtitlesTwoTone />,
  [pathsKey.COLLABORATORS]: <SupervisorAccountTwoTone />,
  [pathsKey.CONTRIBUTE]: <CodeTwoToneIcon />,
  [pathsKey.TUTORIALS]: <LaptopTwoTone />,
}

class SideBar extends React.PureComponent {
  render() {
    return (
      <div className={styles.root}>
        <ul className={styles.navItemContainer}>
          {getPaths.map((path: {}) => {
            if (path.active) {
              return (
                <NavItem
                  key={path.href}
                  href={path.href}
                  iconComponent={iconsOfPath[path.key]}>
                  {path.label}
                </NavItem>
              )
            }
          })}
        </ul>
      </div>
    )
  }
}

export default SideBar
