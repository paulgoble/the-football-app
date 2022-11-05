import React from 'react'
import PropTypes from 'prop-types'

export const Error = ({ message }) => (
  <div className="error">
    <b>{message}</b>
  </div>
)

Error.propTypes = {
  message: PropTypes.string.isRequired
}