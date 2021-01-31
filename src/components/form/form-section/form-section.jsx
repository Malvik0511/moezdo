import React, { memo } from 'react'
import isEqual from 'lodash.isequal'
import PropTypes from 'prop-types'

import { FormGroup } from './form-group'
import style from './style.module.scss'

export const FormSection = memo(({ title, subtitle, description, groups, values }) => {
    return groups?.length ?
        <section className={style.section}>
            <div>
                {
                    title && <div className={style.titleWrapper}>
                        <h4>{title}</h4>
                    </div>
                }
                {
                    subtitle && <p>{subtitle}</p>
                }
                {
                    description && <span>{description}</span>
                }
            </div>
            {
                groups.map(({fields}, i) =>
                    <FormGroup fields={fields} values={values} key={i}/>
                )
            }
        </section> :
        null
}, isEqual)

FormSection.propTypes = {
    groups: PropTypes.array,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    values: PropTypes.object,
}

FormSection.defaultProps = {
    groups: [],
    title: '',
    subtitle: '',
    description: '',
    values: {},
}

