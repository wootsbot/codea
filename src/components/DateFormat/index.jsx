import React from 'react'
import PropTypes from 'prop-types'

import 'moment/locale/es'
import moment from 'moment-timezone'

moment.locale('es')
moment.tz.setDefault('America/Mexico_City')

const DateFormat = ({ date, format, fromNow }) => {
  const FormatDate = () => {
    if (format && !fromNow) {
      return moment(date).format(format)
    }

    if (fromNow) {
      return moment(date).fromNow()
    }

    moment(date)
  }

  return <React.Fragment>{FormatDate()}</React.Fragment>
}

DateFormat.propTypes = {
  date: PropTypes.string.isRequired,
  format: PropTypes.string,
  fromNow: PropTypes.bool,
}

export default DateFormat
