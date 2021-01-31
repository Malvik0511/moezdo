import React from 'react'
import omit from 'lodash.omit'
import { Form } from 'react-bootstrap'
const omitList = ['isValid', 'isInvalid']

export const Radio = ({ options, ...props }) => {
    const passed = omit(props, omitList)

    return (
        <fieldset {...passed} data-unit="input:radio:group">
            {
                options.map(({ title, value }) => (
                    <Form.Check
                        value={value}
                        type="radio"
                        label={title}
                        name={passed.id}
                        key={value}
                        id={value}
                        defaultChecked={passed.value === value}
                    />
                ))
            }
        </fieldset>
    )
}