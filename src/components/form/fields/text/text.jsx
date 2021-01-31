import React  from 'react'
import { Form } from "react-bootstrap";

export const Text = (props) => (
    <Form.Control type='text' {...props} data-unit="input:input"/>
)