import { identity } from 'lodash'

import { getCurrency } from '../utils'

export const getMoneyViewValue = (value = {}) => {
    const { value: money = '', currency = '' } = value

    return `${Intl.NumberFormat('ru-RU').format(money)} ${getCurrency(currency)}`
}

export const viewValuesGetter = {
    Money: getMoneyViewValue,
    default: identity
}
