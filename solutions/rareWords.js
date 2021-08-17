const dictionary = require('../dictionary_compact')
const {average, deepEquals, speedTest} = require('../utility')

// prompt: write a function that takes an array of strings and returns the strings it considers most rare
// rarity should be determined by how common the letters of the words in the set are
// the output should be an object with key:value pairs for each word length and the corresponding rares word of that length
// don't worry about ties

// example: f(['ac', 'ab', 'c']) -> {1: 'c', 2: 'ab'}
// for the input ['ac', 'ab', 'c'], 'a' appears twice, 'b' appears once, and 'c' appears twice
// therefore, 'ab' should be considered the rarest since it contains both a rare and common letter
// while 'ac' and 'c' should be considered equally common since they both only contain common letters

// bonus: add a second input that consists of an array of forbidden characters
// words in the set with these characters will be disqualified from ranking


const countCharacters = set => {
  let searchIndex = {total: 0}
  set.forEach(word => {
    word.split('').forEach(character => {
      searchIndex[character] = searchIndex[character] ? searchIndex[character] + 1 : 1
      searchIndex.total++
    })
  })
  return searchIndex
}

const getRarestWords = (set, forbidden = []) => {
  let characterCount = countCharacters(set)
  let characterWeights = {}
  for (const character in characterCount) {
    characterWeights[character] = characterCount[character] / characterCount.total
  }
  const getWeight = word => (average(word.split('').map(character => characterWeights[character])))
  let rareWords = {}
  set.forEach(word => {
    if (
      forbidden.filter(character => word.indexOf(character) > -1).length === 0 &&
      (!rareWords[word.length] || getWeight(word) < getWeight(rareWords[word.length]))
    ) rareWords[word.length] = word
  })
  return rareWords
}


// validity tests
const validation = func => {
  let solution = {1: 'c', 2: 'ab'}
  let attempt = func(['ac', 'ab', 'c'])
  if (deepEquals(solution, attempt)) console.log('test one passed')
  else {
    console.error('expected ', solution, 'received', attempt)
    throw 'test one failed'
  }
  
  solution = {
    '1': 'j',
    '2': '--',
    '3': '-fy',
    '4': 'fuzz',
    '5': 'fuzzy',
    '6': '------',
    '7': 'wow-wow',
    '8': 'hydroxy-',
    '9': 'lumpy-jaw',
    '10': 'fly fungus',
    '11': 'mumbo jumbo',
    '12': 'muscovy duck',
    '13': 'bubbling jock',
    '14': 'bourbon whisky',
    '15': 'wickiup wickyup',
    '16': 'norfolk dumpling',
    '17': 'vickers-maxim gun',
    '18': 'physico-philosophy',
    '19': 'high-churchman-ship',
    '20': 'to compound a felony',
    '21': 'land of steady habits',
    '22': 'bell system of control',
    '23': 'pseudo-monocotyledonous',
    '24': 'quasi-public corporation',
    '25': 'coast and geodetic survey',
    '26': 'public-service corporation',
    '27': 'hydropneumatic gun carriage',
    '30': 'chautauqua system of education',
    '31': 'american protective association',
    '35': 'vickers-maxim automatic machine gun'  
  }
  attempt = func(Object.keys(dictionary))
  if (deepEquals(solution, attempt)) console.log('test two passed')
  else {
    console.error('expected ', solution, 'received', attempt)
    throw 'test two failed'
  }
}

// validation(getRarestWords)

// speed test
// console.log('average speed')
// console.log(speedTest(getRarestWords, [Object.keys(dictionary)], 20, true))

module.exports = {validation}