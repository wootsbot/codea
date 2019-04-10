import React from 'react'
import PropTypes from 'prop-types'

import Img from 'gatsby-image'
import Typography from '@material-ui/core/Typography'

import styles from './styles.module.scss'

class Contributor extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string,
    avatar: PropTypes.object,
    fullName: PropTypes.string,
    bioFull: PropTypes.string,
    bio: PropTypes.string,
    languages: PropTypes.array,
  }

  render() {
    const { id, avatar, fullName, bioFull, bio, languages } = this.props

    return (
      <React.Fragment>
        <div className={styles.contributorUser}>
          <div className={styles.contributorUserAvatarContainer}>
            <Img alt="avatar author" fixed={avatar} />

            <div className={styles.contributorUserBio}>
              <Typography variant="subtitle2">{bio}</Typography>
            </div>
          </div>

          <div className={styles.contributorUserDetails}>
            <Typography component="h1" variant="h4" gutterBottom>
              {fullName}
            </Typography>

            <Typography variant="h6" color="textSecondary" gutterBottom>
              {`@${id}`}
            </Typography>

            <Typography variant="subtitle2" gutterBottom>
              {bioFull}
            </Typography>
          </div>
        </div>

        <div className={styles.contributorLanguages}>
          {languages.map(({ node }) => (
            <div key={node.id} className={styles.contributorLanguagesLanguage}>
              <Img
                alt="avatar author"
                className={styles.contributorLanguagesLanguageIcon}
                fixed={node.image.childImageSharp.fixed}
              />

              <Typography
                variant="h6"
                className={styles.contributorLanguagesLanguageText}>
                {node.name}
              </Typography>
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default Contributor
