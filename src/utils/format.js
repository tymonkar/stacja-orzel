export const formatDecimal = (value, digits = 2) => value.toFixed(digits).replace('.', ',')

export const money = (value) => `${formatDecimal(value)} zł`

export const formatLiters = (value) => `${formatDecimal(value)} l`
