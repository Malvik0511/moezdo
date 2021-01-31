import React  from 'react'
import { Form } from 'react-bootstrap'

export const Email = (props) => (
    <Form.Control type="email" {...props} data-unit="input:email"/>
)
