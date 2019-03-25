import React from 'react'

import SubtitlesTwoTone from '@material-ui/icons/SubtitlesTwoTone'
import CodeTwoToneIcon from '@material-ui/icons/CodeTwoTone'
import LaptopTwoTone from '@material-ui/icons/LaptopTwoTone'
import FiberNewTwoTone from '@material-ui/icons/FiberNewTwoTone'

import { getPaths, getPathsActives, getKeyPath } from 'utils/paths'

import NavItem from './SideItem'
import styles from './styles.module.scss'

const iconsOfPath = {
  [getKeyPath.PATCH_ARTICLES]: <SubtitlesTwoTone />,
  [getKeyPath.PATCH_NEWS]: <FiberNewTwoTone />,
  [getKeyPath.PATCH_CONTRIBUTE]: <CodeTwoToneIcon />,
  [getKeyPath.PATCH_TUTORIALS]: <LaptopTwoTone />,
}

class SideBar extends React.PureComponent {
  render() {
    return (
      <div className={styles.root}>
        <ul className={styles.navItemContainer}>
          {getPathsActives(getPaths).map(path => (
            <NavItem
              key={path.patch}
              href={path.patch}
              iconComponent={iconsOfPath[path.patch]}
              disable={path.disable}>
              {path.label}
            </NavItem>
          ))}
        </ul>
      </div>
    )
  }
}

export default SideBar
