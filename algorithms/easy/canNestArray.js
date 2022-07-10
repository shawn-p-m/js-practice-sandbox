const getMin = (arr) => arr.reduce((a, b) => Math.min(a, b))
const getMax = (arr) => arr.reduce((a, b) => Math.max(a, b))

const canNest = (smallArr, bigArr) => {
    const smallArrMin = getMin(smallArr)
    const smallArrMax = getMax(smallArr)
    const bigArrMin = getMin(bigArr)
    const bigArrMax = getMax(bigArr)
    return smallArrMin > bigArrMin && smallArrMax < bigArrMax
}