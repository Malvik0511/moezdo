import React, { memo } from 'react'
import isEqual from 'lodash.isequal'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Button } from "react-bootstrap";

import style from './style.module.scss'

const Submit = memo(({ disabled, btnText }) => {
    return (
        <section>
            <div className={style.submitWrapper}>
                <Button type="submit" className={style.submit} disabled={disabled}>
                    <span>{btnText}</span>
                </Button>
            </div>
        </section>
    )
}, isEqual)

Submit.propTypes = {
    disabled: PropTypes.bool,
    btnText: PropTypes.string.isRequired
}

Submit.defaultProps = {
    disabled: true
}

export const FormSubmit = Submit

