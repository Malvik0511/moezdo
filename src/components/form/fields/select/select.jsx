import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'

export const Select = ({ options, ...props}) => (
    <Form.Control as="select" {...props} data-unit="input:select">
        {
            options.map(({ title, value}) =>
                <option value={value} key={value} name={props.id}>{title}</option>
            )
        }
    </Form.Control>
)

Select.propTypes = {
    options: PropTypes.array.isRequired
}