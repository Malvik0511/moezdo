import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from "react-bootstrap";

import style from '../../style.module.scss'

export const Validator = ({ error }) => (
    <div className={style.validatorWrapper}>
        {error ? <Alert variant='danger'>{error}</Alert>: null}
    </div>
)

Validator.propTypes = {
    error: PropTypes.string
}

Validator.defaultProps = {
    error: ''
}
