const errorTypes = {
    required: 'required',
    includeReg: 'includeReg',
    excludeReg: 'excludeReg',
    mustBeNumber: 'mustBeNumber',
    minValue: 'minValue',
    maxValue: 'maxValue',
    maxLength: 'maxLength',
    strictLength: 'strictLength',
    defaultValidator: 'defaultValidator'
}

const errorBase = {
    [errorTypes.required]: "Поле должно быть заполнено",
    [errorTypes.includeReg]: "Значение должно должно соответствовать",
    [errorTypes.excludeReg]: "Значение должно не должно соответствовать",
    [errorTypes.mustBeNumber]: "Значение должно быть числом",
    [errorTypes.minValue]: "Значение должно быть больше или равно",
    [errorTypes.maxValue]: "Значение должно быть меньше или равно",
    [errorTypes.maxLength]: "Максимальная длина поля",
    [errorTypes.strictLength]: "Длина поля должна быть",
    [errorTypes.defaultValidator]: "",
}

const getDefaultMessage = (type, additional = '') => {
    return errorBase[type] ? `${errorBase[type]} ${additional}` : ''
}

const required = (value, payload) => {
    const message = payload?.message || getDefaultMessage(errorTypes.required)
    return value ? '' : message
}

const includeReg = (value, payload) => {
    const message = payload?.message || getDefaultMessage(errorTypes.includeReg, payload.value)
    return String(value).match(payload.value) ? '' : message
}

const excludeReg = (value, payload) => {
    const message = payload?.message || getDefaultMessage(errorTypes.excludeReg, payload.value)
    return String(value).match(payload.value) ? message : ''
}

const mustBeNumber = (value, payload) => {
    const message = payload?.message || getDefaultMessage(errorTypes.mustBeNumber)
    return isNaN(value) ? message : ''
}

const minValue = (value, payload) => {
    const message = payload?.message || getDefaultMessage(errorTypes.minValue, Intl.NumberFormat('ru-RU').format(payload.value))

    return isNaN(value) || Number(value) < Number(payload.value) ? message : ''
}

const maxValue = (value, payload) => {
    const message = payload?.message || getDefaultMessage(errorTypes.maxValue, Intl.NumberFormat('ru-RU').format(payload.value))

    return isNaN(value) || Number(value) > Number(payload.value) ? message : ''
}

const maxLength = (value, payload) => {
    const message = payload?.message || getDefaultMessage(errorTypes.maxLength, value)

    return String(value).length > Number(payload.value) ? message : ''
}

const strictLength = (value, payload) => {
    const message = payload?.message || getDefaultMessage(errorTypes.strictLength, `${payload.value} символов`)

    return String(value).length !== Number(payload.value) ? message : ''
}

const defaultValidator = () => ''

export const validators = {
    required,
    mustBeNumber,
    minValue,
    maxValue,
    defaultValidator,
    maxLength,
    includeReg,
    excludeReg,
    strictLength
}
