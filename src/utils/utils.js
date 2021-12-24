// import * as constants from '@/utils/constants'

export const compare = (property, parser) =>
    (a, b) => {
        if (parser) {
            return parser(a[property]) - parser(b[property]);
        } else {
            return Number(a[property]) - Number(b[property]);
        }
    }
export const sortBy = function (property) {
    return function (a, b) {
        return Date.parse(new Date(a[property])) - Date.parse(new Date(b[property]))
    }
}
