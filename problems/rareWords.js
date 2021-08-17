const {validation} = require('../solutions/rareWords')

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


const getRarestWords = (set) => {
  // insert code here :)
}


// validity tests
validation(getRarestWords)