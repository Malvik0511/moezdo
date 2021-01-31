import identity from 'lodash.identity'

const getMoneyValue = (value) => value?.value || ''

export const valuesGetter = {
    Money: getMoneyValue,
    default: identity
}
