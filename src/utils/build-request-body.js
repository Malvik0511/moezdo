export const buildRequestBody = (visibleSet, fields) => Object
    .keys(visibleSet)
    .reduce((saved, key) => visibleSet[key] ? ({ ...saved, [key]: fields[key]}) : saved, {})