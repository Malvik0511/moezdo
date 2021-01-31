import React, { memo } from 'react'
import isEqual from 'lodash.isequal'
import classnames from 'classnames'
import { Field } from 'react-final-form'
import PropTypes from 'prop-types'

import { composeValidators } from '../../fields/utils'

import { Validator } from './validator'
import style from './style.module.scss'

export const CustomField = memo(({ id, title, count, type, component: Component, ...field }) => (
    <div className={classnames(style.fieldWrapper, style[`count${count}`])} key={id} data-unit={id}>
        <Field name={id} validate={composeValidators(field.validators, type)}>
            {({ input, meta }) => {
                const { error, dirty, touched } = meta
                const errState = error && (dirty || touched)
                const errResult = errState ? error : ''
                const isValid = dirty && touched ? !errResult : false
                const isInvalid = errState

                return (
                    <div>
                        {
                            title && <label htmlFor={`field-${id}`} className={style.label}>{title}</label>
                        }
                        <Component {...input} id={`field-${id}`} {...field} isValid={isValid} isInvalid={isInvalid} aria-label={title}/>
                        <Validator error={errResult} />
                    </div>
                )
            }}
        </Field>
    </div>
), isEqual)

CustomField.propTypes = {
    id: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
    title: PropTypes.string,
    type: PropTypes.string,
    count: PropTypes.number.isRequired
}

CustomField.defaultProps = {
    title: '',
    type: ''
}
