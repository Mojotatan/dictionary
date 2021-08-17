const dictionary = require('./dictionary_compact')

const getRandomWord = () => (
  Object.keys(dictionary)[Math.floor(Math.random() * Object.keys(dictionary).length)]
)
const getNRandomWords = n => (() => {
  let words = []
  for (let i = 0; i < n; i++) {
    words.push(getRandomWord())
  }
  return words
})

const average = numbers => (
  numbers.reduce((a, b) => (a + b)) / numbers.length
)

const speedTest = (func, getRandomInput, n = 100, spread = false) => {
  let times = []
  for (let i = 0; i < n; i++) {
    let input = typeof getRandomInput === 'function' ? getRandomInput() : getRandomInput
    let t = Date.now()
    if (spread) func(...input)
    else func(input)
    times.push(Date.now() - t)
  }
  return average(times)
}

const deepEquals = (a, b) => {
  if (Array.isArray(a) && Array.isArray(b)){
      return a.every((elem, i) => deepEquals(b[i],elem))
  } else if (typeof a === "object" && typeof b === "object" && a !== null && b !== null) {
      const aKeys = Object.keys(a)
      const bKeys = Object.keys(b)
      return aKeys.every(key => deepEquals(a[key], b[key])) && aKeys.length === bKeys.length
  }
  return a === b
}

module.exports = {average, deepEquals, speedTest, getRandomWord, getNRandomWords}