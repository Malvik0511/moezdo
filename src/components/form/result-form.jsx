import React from 'react'
import PropTypes from 'prop-types'

import { CustomForm } from './custom-form'

export const ResultForm = ({ formStructure, ...props }) => {
    return <CustomForm {...props} fields={formStructure}/>
}

ResultForm.propTypes = {
    formStructure: PropTypes.object,
    fieldList: PropTypes.array,
}

ResultForm.defaultProps = {
    formStructure: {},
    fieldList: [],
}
