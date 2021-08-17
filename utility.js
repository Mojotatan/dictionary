const average = numbers => (
  numbers.reduce((a, b) => (a + b)) / numbers.length
)

const speedTest = (func, getRandomInput, n = 100) => {
  let times = []
  for (let i = 0; i < n; i++) {
    let input = typeof getRandomInput === 'function' ? getRandomInput() : getRandomInput
    let t = Date.now()
    func(input)
    times.push(Date.now() - t)
  }
  return average(times)
}

module.exports = {speedTest}