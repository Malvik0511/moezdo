import React, { useMemo } from 'react'
import { Form } from 'react-final-form'
import PropTypes from 'prop-types'
import noop from 'lodash.noop'

import { sections as allSections } from './constants'
import { ResultForm } from './result-form'

export const RForm = ({ fields, onSubmit, onValidationStateChange, onChange, btnText, loading }) => {
    const memoFields = useMemo(() => fields, [JSON.stringify(fields)])
    const sections = useMemo(() => allSections
        .filter((section) => fields[section]?.groups?.length)
        , [memoFields])
    const allFields = useMemo(() =>  sections
        .reduce((ac, cur) => [...ac, ...fields[cur]?.groups
            ?.reduce((savedGroups, group) => [...savedGroups, ...group.fields], []) || []],
            []), [memoFields])

    const initial = useMemo(() => allFields.reduce((acc, cur) => ({
        ...acc, [cur.id]: cur.value
    }), {}), [memoFields])


    return (<Form
        initialValues={initial}
        onSubmit={onSubmit}
        onChange={onChange}
        render={ResultForm}
        loading={loading}
        btnText={btnText}
        formStructure={fields}
        fieldList={allFields}
        onValidationStateChange={onValidationStateChange}
    />)
}

RForm.propTypes = {
    fields: PropTypes.object,
    onSubmit: PropTypes.func,
    onValidationStateChange: PropTypes.func,
    onChange: PropTypes.func,
    loading: PropTypes.bool
}

RForm.defaultProps = {
    fields: {},
    onSubmit: noop,
    onValidationStateChange: noop,
    onChange: noop,
    loading: false
}

