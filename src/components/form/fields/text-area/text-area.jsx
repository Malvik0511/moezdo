import React from 'react'
import { Form } from "react-bootstrap";

export const TextArea= (props) => (
    <Form.Control as="textarea" rows={3}  {...props} data-unit="input:textarea"/>
)