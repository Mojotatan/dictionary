const dictionary = require('./dictionary_compact')
const {speedTest} = require('./utility')

const getBaseChars = word => (
  word.split('').filter(char => (char.search(/\w/) > -1)).sort().join('')
)
const getAnagramsNaive = targetWord => {
  let baseChars = getBaseChars(targetWord)
  return Object.keys(dictionary).filter(word => baseChars === getBaseChars(word) && word !== targetWord)
}

// console.log(getAnagramsNaive('tram'))

const getAnagramsByWord = word => {

}


console.log(speedTest(getAnagramsNaive, 'tram'))