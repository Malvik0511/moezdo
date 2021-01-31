import { components } from './components'
import { validators } from './validators'
import { valuesGetter } from './values-getter'
import { viewValuesGetter } from './view-values-getter'

const getFieldValue = (name) => valuesGetter[name] || valuesGetter.default

const buildValidators = (list, fieldType) => list.map(({ type, ...validator }) => (value) => {
    const validateFn = validators[type] || validators.defaultValidator
    const fieldValue = getFieldValue(fieldType)(value)

    return validateFn(fieldValue, validator)
})

export const getFieldViewValue = (name) => viewValuesGetter[name] || viewValuesGetter.default

export const getComponent = (name) => components[name] || components.Text

export const composeValidators = (list = [], type) => {
    const validatorList = buildValidators(list, type)
    return (value) => validatorList.reduce((error, validator) => error || validator(value), '')
}

