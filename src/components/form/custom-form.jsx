import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash.noop'

import style from './style.module.scss'
import { sections } from './constants'
import { FormSection } from './form-section/form-section'
import { FormSubmit } from './form-section/form-submit'

export const CustomForm = ({ handleSubmit, fields: formFields, invalid, onValidationStateChange, onChange, values, btnText, loading }) => {
    useEffect(() => {
        onValidationStateChange(!invalid)
    }, [invalid, onValidationStateChange])

    useEffect(() => {
        const visibleSet =  sections
            .filter(section => formFields[section])
            .reduce((saved, section) => [...saved, ...formFields[section].groups], [])
            ?.reduce((ac, cur) => [...ac, ...cur.fields], [])
            ?.reduce((ac, cur) => ({...ac, [cur.id]: Boolean(!cur.visible || values[cur.visible.id].match(cur.visible.regExp))}), {})

        onChange({values, visibleSet})
    }, [values])

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit} className={style.form}>
                {
                    sections.map((section) => <FormSection {...formFields[section]} key={section} values={values}/>)
                }
                <FormSubmit disabled={invalid || loading} btnText={btnText}/>
            </form>
        </React.Fragment>
    )
}

CustomForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    fields: PropTypes.object,
    onValidationStateChange: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    values: PropTypes.object,
    loading: PropTypes.bool,
    invalid: PropTypes.bool,
    btnText: PropTypes.string.isRequired
}

CustomForm.defaultProps = {
    fields: {},
    onValidationStateChange: noop,
    loading: false,
    values: {}
}
