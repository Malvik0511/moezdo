import React from 'react'
import { Form } from 'react-bootstrap'

export const Phone = (props) => (
    <Form.Control type='phone' {...props} data-unit="input:phone" />
)