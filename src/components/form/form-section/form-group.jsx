import React from 'react'
import omit from 'lodash.omit'
import PropTypes from 'prop-types'

import { CustomField } from './field/field'
import { getComponent } from '../fields/utils'
import style from './style.module.scss'

export const FormGroup = ({ fields, values }) => {
    return <div className={style.group}>
        {
            fields
                .filter(field => !field.visible || values[field.visible.id].match(field.visible.regExp) )
                .map((props) => (
                    <CustomField {...omit(props, ['value'])} component={getComponent(props.type)} key={props.id} count={fields.length > 3 ? 3 : fields.length}/>)
                )
        }
    </div>
}

FormGroup.propTypes = {
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            visible: PropTypes.shape({
                id: PropTypes.string.isRequired,
                regExp: PropTypes.string.isRequired
            })
        })
    ),
    values: PropTypes.object
}

FormGroup.defaultProps = {
    fields: [],
    values: {}
}